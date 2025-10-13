import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const[message, setMessage] = useState('')
    const[username, setUsername] = useState('')
    const[email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const [registerUser, {isLoading}] = useRegisterUserMutation()
    // const navigate = useNavigate()

    const handleRegister = async(e) =>{
        e.preventDefault()
        const data = {
            username,
            email, 
            password
        }
        try {
            await registerUser(data).unwrap()
            alert("Registration successful")
            navigate('login')
        } catch (error) {
           setMessage("Registration unsuccessful") 
        }
    }
  return (
   <section className='login-page'>
           <div className="login-body">
               <h2 className=''>Register</h2>
               <form onSubmit={handleRegister} className=''>
                    <input 
                    onChange={(e) => setUsername(e.target.value)} 
                    type="text" name='username' id='username' 
                   placeholder='Username' required
                   className=''
                   />
                   <input 
                    onChange={(e) => setEmail(e.target.value)} 
                   type="email" name='email' id='email' 
                   placeholder='Email Address' required
                   className=''
                   />
                   <input 
                    onChange={(e) => setPassword(e.target.value)} 
                   type="password" name='password' id='password' 
                   placeholder='Password' required
                   className=''
                   />
                   {/* {
                       message && <p>{message}</p>
                   } */}
   
                   <button type='submit'
                   className=''
                   >Register</button>
               </form>
               <p>Have an account? <Link to='/login'>Login</Link></p>
           </div>
    </section>
  )
}

export default Register