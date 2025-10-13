import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
    const[message, setMessage] = useState('')
    const[email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const dispatch = useDispatch()
    // const [loginUser, {isLoading: loginLoading}]  = useLoginUserMutation()
    // const navigate = useNavigate()
    // console.log(loginUser)

    const handleLogin = async(e) =>{
        e.preventDefault()
        const data = {
            email, 
            password
        }
        // console.log(data)

        try {
         
        const response = await loginUser(data).unwrap()
        // console.log(response)
        alert("Login successful")
        navigate("/")
        } catch (error) {
            setMessage("Please provide a valid email address")
        }
    }
  return (
    <section className='login-page'>
        <div className="login-body">
            <h2 className=''>Login</h2>
            <form onSubmit={handleLogin} className=''>
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
                {
                    message && <p>{message}</p>
                }

                <button type='submit'
                className=''
                >Login</button>
            </form>
            <p>Don't have an account? <Link to='/register'>Register</Link> here</p>
        </div>
    </section>
  )
}

export default Login