import React from 'react'
import {Navigate,Link} from 'react-router-dom'

export default function SignUp_confirm() {
  return (
    <div className='container d-flex' style={{alignItems:"center",justifyContent:"center",height:"500px",width:"600px"}}>
        <p>
        <b>
        Your Account has been created!
        </b>
        <button className='btn btn-dark text-light' style={{display:"block"}}>
        <Link to='/services1'>
            Redirect to Services
        </Link>
        </button>
        </p>
    </div>
  )
}
