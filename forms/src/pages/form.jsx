import { useState } from "react"


const Form = () => {
    const [formData , setFormData] = useState({username:"" , password:""})

    const handleFormChange = (event) => {
        const { name , value } = event.target
        setFormData({...formData, [name]: value })
    }
    const handleFormSubmit = async (event) => {
        event.preventDefault()
        console.log(formData);
        
    }
    // return  <div>
    //         <form style={{display:"flex" , width:"500" , alignContent:"center" }}>
    //             <input type="text" name="username" placeholder="enter a name..." />
    //             <input type="password" name="password" placeholder="enter the password..." />
    //             <button style={{backgroundColor:"green"}}>Sigh In</button>
    //         </form>
    //     </div>""
   return <div>
            <form style={{width:"500px" , alignContent:"center", display:"flex" , flexFlow:"column"}} onSubmit={handleFormSubmit}>
                <input type="text" name="username" onChange={handleFormChange} value={formData.username} placeholder="Enter username..." className="p-2"/>
                <input type="password" name="password" onChange={handleFormChange} value={formData.password} placeholder="Enter password..." className="p-2"/>
                <button style={{backgroundColor:"green", width: "100px", padding: "2px" }} >SignIn</button>
            </form>
        </div>
}
export default Form;