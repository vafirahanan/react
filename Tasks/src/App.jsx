// import React, { createContext, Fragment , useState } from 'react';
// import { Toaster } from 'react-hot-toast';
// import Shoppage from './pages/shoppage';
// import React from 'react';
// import Todo from './pages/todo';
// import Events from './pages/Events';

// export const TodoContext = createContext()
// export const CartContext = createContext()
      
          

const App = () => {
//   const [todoList, setTodoList] = useState([])
//   const [ editableTask , setEditableTask] = useState(null)
//   const[cartList, setCartList] = useState([])
//   const [ editTask , setEditTask] = useState("")

//   const handleUpdate = () => {
//     if (!editTask) {
//         return toast.error("Task is required!")
//     } 
//     const exist = todoList.find((element) => element.task.toLowerCase() == editTask.toLowerCase())
//     if (exist && exist.id != editableTask.id) {
//         return toast.error("Task already exist")
//     }
//     if (editTask.length < 5) {
//         return toast.error("Minimum 5 characters")
//     }
//     const res = todoList.map(todo => {
//         if (todo.id == editableTask.id) {
//             return {...todo, task: editTask, updatedAt: new Date().toLocaleString("en-IN")}
//         }
//         return todo
//     })
//     setTodoList(res)
//     setEditTask("")
//     setEditableTask(null)
// }
  // return <Fragment>
 {/* <TodoContext.Provider value={{todoList , setTodoList , editableTask , setEditableTask , editTask , setEditTask , handleUpdate}}> */}
    {/* <Todo />
   <CartContext.Provider value={{cartList, setCartList}}>
    <Shoppage/>
  </CartContext.Provider>
  <Toaster position="top-right" /> */}
  // <Events />
 {/* </TodoContext.Provider>  */}
  // </Fragment> 
 }

export default App;

