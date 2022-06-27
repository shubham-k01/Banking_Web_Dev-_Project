import React, { useState } from 'react'
import { Zoom, Fade, Rotate, Flip, Bounce, Roll } from 'react-reveal'

export default function Validation() {

    return (
        <div className='container d-flex' style={{width:"600px",height:"550px",marginTop:"50px",justifyContent:"center",alignItems:"center",backgroundColor:"yellowgreen",borderRadius:"2px",border:"10px solid black"}} >
    <div className='container'>
    <b>Sign Up</b>
    <br />
          <div className='container' >
            <form className="row g-3 needs-validation my-3" style={{display:'block'}} method="post" action="/signup">
                <Zoom>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">First name</label>
                    <input type="text" className="form-control" name="First_name" id="validationCustom01" required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" name="Last_name" id="validationCustom02"  required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustomUsername" className="form-label">Username</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" className="form-control" name="Username" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">Password</label>
                    <input type="password" className="form-control" name="Password" id="validationCustom03" required/>
                        <div className="invalid-feedback">
                            Please provide a valid password.
                        </div>
                </div>
                
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                            <label className="form-check-label" htmlFor="invalidCheck">
                                Agree to terms and conditions
                            </label>
                            <div className="invalid-feedback">
                                You must agree before submitting.
                            </div>
                    </div>
                </div>
                </Zoom>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
                <p id="display"></p>
            </form>
        </div>
</div>
</div>
    )
}
