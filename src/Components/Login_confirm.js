import React from 'react'
import {Link} from 'react-router-dom'

export default function Login_confirm() {
  return (
    <div className='container d-flex' style={{alignItems:"center",justifyContent:"center",height:"500px",width:"600px"}}>
        <p>
        <b>
        You have accessed your Account!
        </b>
        <button className='btn btn-dark text-light' style={{display:"block"}}>
        <Link to='/services2'>
            Redirect to Services
        </Link>
        </button>
        </p>
    </div>
  )
}
