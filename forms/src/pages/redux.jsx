import React from "react"
import {useDispatch, useSelector} from "react-redux"
import { increment , decrement } from "../Redux/slices/counterslice"

const Redux = () => {
    const {counter} =useSelector((state)=>state.counter)

    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(increment({num: 10}))
    }
    const handleDecrement = () => {
        dispatch(decrement({num: 10}))
    }


    return <div>
        <div>{counter}d</div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
            
        </div>
}

export default Redux;
