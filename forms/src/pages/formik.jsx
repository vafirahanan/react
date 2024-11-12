import {useFormik} from 'formik'


const Formik = () => {

    const formik = useFormik({
        initialValues: {
            username: "",
            password:"",
        },
        onSubmit : ({ username , password}) => {
            console.log(username , password);
            
        },
        Validate: ({ username , password }) => {
            if( username == "" && password == "") {
                return {
                    username: "Username is required" , 
                    password: "Password is required"
                }
            }
            if( username == "") {
                return {
                    username: "Username is required"
                }
            }
            if( password == "") {
                return {
                    password: "Password is required"
                }
            }
        }
    })

   
    return  <div>
    <form style={{width:"500px" , alignContent:"center", display:"flex" , flexFlow:"column"}} onSubmit={formik.handleSubmit}>
        <input type="text" name="username" onChange={formik.handleChange} value={formik.values.username} placeholder="Enter username..." className="p-2"/>
        <span>{formik.errors.username}</span>
        <input type="password" name="password" onChange={formik.handleChange} value={formik.values.password} placeholder="Enter password..." className="p-2"/>
        <span>{formik.errors.password}</span>
        <button type="submit" style={{backgroundColor:"green", width: "100px", padding: "2px" }} >SignIn</button>
    </form>
</div>
       
}

export default Formik;
