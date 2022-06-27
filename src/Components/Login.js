import React from 'react'
// import { Navigate } from 'react-router-dom'
import {Zoom} from 'react-reveal'

export default function Login() {
    // fetch('/login').then(<Navigate to='/services2'/>)
  return (
    <Zoom>
        <div className='container d-flex' style={{width:"400px",height:"450px",marginTop:"50px",justifyContent:"center",alignItems:"center",backgroundColor:"yellowgreen",borderRadius:"10px",border:"5px"}} >
            <div className='container' >
            <b>Login</b>
            <br />
        <form className="row g-3 needs-validation my-3" style={{display:'block'}} method="POST" action="/login">

            <div className="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='Username' placeholder="Enter Username" required />
                <small id="emailHelp" className="form-text text-muted">We'll never share your Username with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name='Password' placeholder="Password" required />
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary btn-sm" >Submit</button>
        </form>
        </div>
        </div>
        </Zoom>
  )
}
