import React from 'react'
import {Navigate,Link} from 'react-router-dom'

export default function SignUp_failed() {
  return (
    <div className='container d-flex' style={{alignItems:"center",justifyContent:"center",height:"500px",width:"600px"}}>
        <p>
        <b>
        Your Account cannot be created because the username is already assigned to other user!
        </b>
        <button className='btn btn-dark text-light' style={{display:"block"}}>
        <Link to='/signup'>
            Redirect to Signup Page
        </Link>
        </button>
        </p>
    </div>
  )
}
