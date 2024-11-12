import React, { Fragment, useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { IoMdCloseCircle, IoMdEye } from 'react-icons/io'
import { MdCheckCircle, MdEdit, MdOutlineDeleteOutline } from 'react-icons/md'
import { v4 as createId } from 'uuid'
import Modal from '../components/Modal'
import { TodoContext } from '../providers.jsx/todoproviders'
import { useNavigate } from 'react-router-dom'

const Todo = () => {

    const {todoList, setTodoList, editableTask, setEditableTask, setEditTask} = useContext(TodoContext)
    const [todo, setTodo] = useState("")
    const navigate = useNavigate()

    const handleTodo = () => {
        if (!todo) {
            return toast.error("Task is required!")
        } 
        const exist = todoList.findIndex((element) => element.task.toLowerCase() == todo.toLowerCase())
        if (exist > -1) {
            return toast.error("Task already exist")
        }
        if (todo.length < 5) {
            return toast.error("Minimum 5 characters")
        }
        const taskObject = {
            id: createId(),
            task: todo,
            completed: false,
            createdAt: new Date().toLocaleString("en-IN"),
            updatedAt: new Date().toLocaleString("en-IN"),
        }
        setTodoList([taskObject, ...todoList])
        setTodo("")
        return toast.success("Task added")
    }

    const handleRemove = (removeId) => {
        const res = todoList.filter((todo) => todo.id != removeId)
        setTodoList(res)
    }

    const handleStatusUpdate = (taskId) => {
        const res = todoList.map(todo => {
            if (todo.id == taskId) {
                return {...todo, completed: !todo.completed, updatedAt: new Date().toLocaleString("en-IN")}
            }
            return todo
        })
        setTodoList(res)
    }

    const handleEdit = (todo) => {
        setEditableTask(todo)
        setEditTask(todo.task)
    }


    return (
        <div className="">
            {editableTask && <Modal/>}
            <div className="mt-4 d-flex flex-column align-items-center">
                <input type="text" placeholder="Eg: Develop a web app" name="todo" value={todo} onChange={(event) => setTodo(event.target.value)} className="p-2 w-50 rounded border border-secondary" style={{outline: 0}}/>
                <button onClick={handleTodo} className="btn btn-secondary w-50 mt-3">Add Todo</button>
            </div>
            <div className="d-flex flex-column align-items-center mt-4 gap-2">
                <h3>Pending Tasks - ({todoList.filter(t=>!t.completed).length})</h3>
                {
                    todoList.filter(todo => !todo.completed).map((todo) => {
                        return (
                            <div key={todo.id} className="p-3 bg-dark text-light flex-column rounded w-50 d-flex justify-content-between">
                                <div>
                                    <div className="">Task: {todo.task}</div>
                                    <div>Status: {todo.completed ? "Completed" : "Pending"}</div>
                                </div>
                                <div className="d-flex gap-3 justify-content-end">
                                    <MdOutlineDeleteOutline size={20} cursor={"pointer"} onClick={() => handleRemove(todo.id)} />
                                    <MdEdit size={20} cursor={"pointer"} onClick={() => handleEdit(todo)}/>
                                    <MdCheckCircle size={20} cursor={"pointer"} onClick={() => handleStatusUpdate(todo.id)} />    
                                    <MdEdit size={20} cursor={"pointer"} onClick={() => navigate(`/todo/edit/${todo.id}`)}/>
                                    <MdCheckCircle size={20} cursor={"pointer"} onClick={() => handleStatusUpdate(todo.id)} /> 
                                    <IoMdEye size={20} cursor={"pointer"} onClick={() => navigate(`/todo/view/${todo.id}`)}/>
                                </div>
                            </div>
                        )
                    })
                }
                <h3>Completed Tasks - ({todoList.filter(t=>t.completed).length})</h3>
                {
                    todoList.filter(todo => todo.completed).map((todo) => {
                        return (
                            <div key={todo.id} className="p-3 bg-dark text-light rounded w-50 d-flex justify-content-between">
                                <div>
                                    <div>ID: {todo.id}</div>
                                    <div>Task: {todo.task}</div>
                                    <div>Status: {todo.completed ? "Completed" : "Pending"}</div>
                                    <div>Updated: {todo.updatedAt}</div>
                                </div>
                                <div className="d-flex flex-column gap-3 justify-content-between">
                                    <MdOutlineDeleteOutline size={20} cursor={"pointer"} onClick={() => handleRemove(todo.id)} />
                                    <IoMdCloseCircle size={20} color='red' cursor={"pointer"} onClick={() => handleStatusUpdate(todo.id)}/>    
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Todo