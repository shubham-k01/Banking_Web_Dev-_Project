import React from 'react'
import {Link} from 'react-router-dom'

export default function FirstFail() {
  return (
    <div className='container d-flex' style={{alignItems:"center",justifyContent:"center",height:"500px",width:"600px"}}>
        <p>
        <b>
        There is no account with this username!
        </b>
        <br />
        <button className='btn btn-dark text-light' style={{display:"block"}}>
        <Link to='/login'>
            Redirect to Login Page
        </Link>
        </button>
        </p>
    </div>
  )
}
