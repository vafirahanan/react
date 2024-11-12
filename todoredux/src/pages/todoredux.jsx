import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uniqueId } from 'uuid'
import { addToList } from '../redux/slices/todoslice'

const TodoRedux = () => {

    const {todoList}  = useSelector(states => states.todo)
    const [todo, setTodo] = useState("")

    const dispatch = useDispatch()

    const handleAddTask = () => {
        const time = new Date().toLocaleString("en-IN")
        const taskObject = {
            id: uniqueId(),
            title: todo,
            completed: false,
            createdAt: time,
            updatedAt: time
        }
        dispatch(addToList(taskObject))
        setTodo("")
    }

    return (
        <Fragment>
            <div>
                <input type="text" placeholder='Enter Task' onChange={(e) => setTodo(e.target.value)} value={todo} />
                <button onClick={handleAddTask} style={{backgroundColor:"green", borderRadius:"30px"}}>Add Task</button>
            </div>
            <div>
                {
                    todoList.map(item => {
                        return <div key={item.id}>
                            {item.title}
                        </div>
                    })
                }
            </div>
        </Fragment>
    )
}

export default TodoRedux;