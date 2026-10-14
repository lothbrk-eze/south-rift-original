import React,{useState,useEffect} from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';

const Signincomponent = () => {
    let navigate=useNavigate()
    // initialize the two states
    const[email,setEmail]=useState("john@gmail.com")
    const[password,setPassword]=useState("1234")

    // update the value of the two states

    // come up with 3 states of posting data
    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")

 useEffect(() => {
    document.title = "Sign In";
  }, []);
  
  
    // function to signin
    const submit = async (e) =>{
        e.preventDefault()
        setLoading("Please wait...")
        try {
            
            // create an envelope to carry your data
            // the envelope name is formdata
            const formdata = new FormData()
            formdata.append("email",email)
            formdata.append("password",password)

            const response =await axios.post("https://bombadir.pythonanywhere.com/api/signin" ,formdata)

        setLoading("")
        setSuccess(response.data.message)
        // save user in the local storage
        if(response.data.user){
            localStorage.setItem("user", JSON.stringify(response.data.user))

            // redirect the user to the home page
           navigate("/")

        }
        
  
        } catch (error) {
            setLoading("")
            setError(error.message)
            
        }
    }

return (
<div className=' row justify-content-center mt-4 '>
<div className='col-md-6 card shadow p-4 '>
<h1 className='text-center'>Sign in</h1>
{/* bind the variables */}
<h2 className="text-warning"> {loading}</h2>
<h2 className="text-success"> {success}</h2>
<h2 className="text-danger">{error}</h2>

<form action="" onSubmit={submit}  className='text-center'>
   <div className="input-group mb-3">
        <span className="input-group-text">
          <FaEnvelope />
        </span>
        <input
          type="text"
          placeholder="Email"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">
          <FaLock />
        </span>
        <input
          type="password"
          placeholder="Password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        <FaSignInAlt className="me-2" />
        Sign In
      </button>

<p>Already have an account? <Link to= "/signup"> sign up</Link></p>
</form>
</div>
</div>
)
}

export default Signincomponent
