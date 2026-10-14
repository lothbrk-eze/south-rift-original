import React from 'react'
import { Link,useNavigate } from 'react-router-dom'


const Navbar2 = () => {
 // retrieve user from local storage
const loggeduser = JSON.parse (localStorage.getItem("user"))
// handle logout function
let navigate=useNavigate()
const handlelogout = () =>{
localStorage.removeItem("user")
// redirect the user to signin
navigate("/signin")
}

return (
 

<div class="bg-secondary">
 
{/* navbar */}
<nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top " variant="tabs" defaultActiveKey="/home">
 
<button class="navbar-toggler"
data-bs-toggle="collapse"
data-bs-target="#navbarcollapse">

 

<span class="navbar-toggler-icon"></span>

</button>
 

<div class="collapse navbar-collapse"
id="navbarcollapse">
    <div className='navbar-nav ms-auto text-start'>
{/* links are */}
<Link to="/Home" className='nav-link  mx-2'>Home</Link>
<Link to="/Getproducts" className='nav-link  mx-2'>Plane offers</Link>
 <Link to='/tours' className='nav-link mx-2'>Tours</Link>
<Link to="/Gallery" className='nav-link  mx-2'>Gallery</Link>

<Link to="/addstationery" className='nav-link-active  mx-2 btn btn-danger'> Bomet online soko</Link>


    </div>


</div>
 

{/* right hand of navbar */}
<div className='ms-auto d-flex align-items-center gap-3'>
{/* logged in as : {loggeduser.email} */}
{/* Chec if the user is logged in */}
{/* if yes show welcome message and logout button */}
{
loggeduser ? (<div className='navbar-nav d-flex align-items-center'>
{/* show welcome message and logout */}
<span className='text-warning'>
Logged in as : {loggeduser.email}
</span>
{/* Logout button */}
<button className='btn btn-outline-primary' onClick={handlelogout}>Logout</button>
</div>) : (<div className='navbar-nav'>
{/* show signin button and sign up button */}
<Link to="/signin"className='btn btn-outline-primary fa-user me-2'>Signin</Link>
<Link to="/signup" className='btn btn-light fa-user-plus '>Signup</Link>
</div>)
}
</div>
</nav>
{/* end of navbar */}
</div>
 

 

)
}

export default Navbar2
