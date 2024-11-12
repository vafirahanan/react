import React, {useEffect, useState} from 'react';

const Events = () => {

   const [axis , setAxis] = useState({x:0,y:0})
   const handleMouseMove = (event) => {
    setAxis ({ x: event.ClientX , y: event.ClientY})

   


    useEffect(() => {
        document.addEventListener("mousemove" , handleMouseMove )

        return () => {
            document.removeEventListener("mouseout" , handleMouseMove)
        }
    },[])
    return (
        <div style={{height:"100vh", width:"100vw"}} className='d-flex justify-content-center flex-column align-content-center'>
            hello
            <div style={{height:"20px" , width:"20px", left:`${axis.x}px` , top:`${axis.y}px`, filter: "blur(4px)"}}className="bg-dark position-absolute rounded-circle"></div>
            
        </div>
    );
}
}
export default Events;
