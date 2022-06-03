import React from 'react'
import {Navigate,Link} from 'react-router-dom'

export default function Login__confirm() {
  return (
    <div className='container d-flex' style={{alignItems:"center",justifyContent:"center",height:"500px",width:"600px"}}>
        <p>
        <b>
        There is no account conatining this username!
        </b>
        <button className='btn btn-dark text-light' style={{display:"block"}}>
        <Link to='/login'>
            Redirect to Login Page
        </Link>
        </button>
        </p>
    </div>
  )
}
