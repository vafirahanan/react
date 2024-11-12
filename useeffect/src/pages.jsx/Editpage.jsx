import { useContext } from "react";
import React  from 'react';
import { useNavigate,useParams } from "react-router-dom";
import { TodoContext } from "../providers.jsx/todoproviders";

const Editpage = () => {
   
    const {id} = useParams()
    const {todoList , setTodoList} = useContext(TodoContext)
    const [todo, setTodo] = useState((todoList.find(item => item.id == id))?.task)

    const navigate = useNavigate()

    const handleUpdate = () => {
        const res = todoList.map(item => {
            if(item.id==id) {
                return{...item,task:todo,updatedAt: newDate().toLocalString("en-IN")}
            }
            return item
        })
        setTodoList(res)
        navigate("/todo")
        }
        return (
            <div>
            <input type="text" placeholder='Enter Task' value ={todo} onChange={(event)=> setTodo(event.target)}/>
            <button onClick={handleUpdate}>Update</button>
            </div>
        )

    }

export default Editpage;
