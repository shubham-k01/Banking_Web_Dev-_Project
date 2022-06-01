import React from 'react'

import {Zoom,Fade,Rotate,Flip,Bounce, Roll} from 'react-reveal'

export default function Login() {
  return (
    <Zoom>
        <div className='container d-flex' style={{width:"400px",height:"450px",marginTop:"50px",justifyContent:"center",alignItems:"center",backgroundColor:"yellowgreen",borderRadius:"10px"}} >
            <div className='container' >
            <b>Sign Up</b>
            <br />
        <form className="row g-3 needs-validation my-3" style={{display:'block'}} method="post" action="/services">

            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary btn-sm">Submit</button>
        </form>
        </div>
        </div>
        </Zoom>
  )
}
