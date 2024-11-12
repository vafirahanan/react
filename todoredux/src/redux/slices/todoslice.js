
import {createSlice} from "@reduxjs/toolkit"

const Todoslice = createSlice({
    name : "todo",
    initialState : {
        todoList: []
    },
    reducers: {
        addToList: (state , action) => {
            const {payload} = action
            state.todoList = [payload , ...state.todoList]
        },
        removeFromList: (state , action) => {
            const { id } = action.payload
            state.todoList = state.todoList.filter(item => item.id != id)
        },
        updateList: (state , action) => {
            const {id,title} = action.payload
            const updatedAt = new Date().toLocaleString("en-IN")
            state.todoList = state.todoList.map(item => {
                if (item.id == id) {
                    return {...item,title,updatedAt }
                }
                return item
            })
        },
        updateStatus: (state , action) => {
            const { id } = action.payload
            const updatedAt = new Date().toLocaleString("en-IN")
            state.todoList = state.todoList.map(item => {
                if (item.id == id) {
                    return {...item, completed: !item.completed,updatedAt }
                }
                return item
            })

    }
}
})
export const { addToList , removeFromList , updateList , updateStatus } = Todoslice.actions
export const { reducer: todoReducer } = Todoslice
