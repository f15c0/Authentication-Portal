import { useState } from 'react';
import login from './login.svg';
import logo from './logo.png';
import swal from 'sweetalert';
import Toastify from 'toastify-js';


//Authentication Page/PortaL

const Auth = () => {

    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [error, setError]= useState('');

    const handleSubmit=(event)=>{
        event.preventDefault();
        if(email=="dennis@gmail.com" && password=="Thegame33!"){
            setError("")
           swal("Successful Login", `Welcome ${email}`, "success")
        }
        else{
            swal("Wrong Credentials", '', 'error')
                
            
        }
    }
    return (
        <div>
            <h5 className="" >Authentication Portal
            <img  className='wave' src={logo} alt='Pillar Logo' width={60}/>
            </h5>
            <div className="wave row">
                {/* login images goes here!!!!! */}
                <div className="col-md-6 col-sm-4 my-auto">
                 <img src={login} alt="Login" width={300}/>
                </div>
                
                {/* Using Bootstrap forms */}
<div className=" col-md-5 col-sm-4">
<h5 className='text-danger'>{error}</h5>   
       {/* Glass Effect */}
<form className='glass p-5 my-auto' onSubmit={handleSubmit}>
  <div className="mb-3">
    
    <label className="form-label"><h6 className='pillarcolor'>Email address / Username</h6></label>
    <input 
         type="email" 
         className="form-control" 
         placeholder='Enter email'
         value={email}
         onChange={(event)=>setEmail(event.target.value)}
         
         />
  </div>
  <div className="mb-3">
    <label className="form-label"><h6 className="pillarcolor">Password</h6></label>
    <input 
        type="password" 
        className="form-control" 
        placeholder='Enter your password' 
        value={password}
        onChange={(event)=>setPassword(event.target.value)}
    />
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>


                </div>

            </div>
            {/* Objects Floating on page */}
                    <div className="area" >
                        <ul className="circles">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                        </ul>
                    </div>
        </div>
     );
}
 
export default Auth;