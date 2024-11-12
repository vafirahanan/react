import React, { Fragment } from 'react'
import Navbar from './Components/navbar'
import Hero from './Components/Hero'
import { useState } from 'react'

const Landingpage = () => {
    
    const [counter, setCounter] = useState({ count1: 0, count2: 0 })
    const handleCounterOne = (op) => {
        setCounter(op == "+" ? {...counter, count1: counter.count1 + 1} : {...counter, count1: counter.count1 - 1})
    }
    const handleCounterTwo = (op) => {
        setCounter(op == "+" ? {...counter, count2: counter.count2 + 1} : {...counter, count2: counter.count2 - 1})
    }
    return (
        <Fragment>
            <Navbar />
        
        <div className="text-center mt-4">
            <div>COUNTER 1: {counter.count1}</div>
            <div>COUNTER 2: {counter.count2}</div>
            <div className="mt-3">
                <button className="btn btn-success" onClick={() => handleCounterOne("+")}>Increment 1</button>
                <button className="btn btn-danger ms-2" onClick={() => handleCounterOne("-")}>Decrement 1</button>
            </div>
            <div className="mt-3">
                <button className="btn btn-success" onClick={() => handleCounterTwo("+")}>Increment 2</button>
                <button className="btn btn-danger ms-2" onClick={() => handleCounterTwo("-")}>Decrement 2</button>
            </div>
        </div>
        </Fragment>
)
}

export default Landingpage;


