import React from 'react'
import { Fade, Rotate, Zoom } from 'react-reveal'

export default function Services() {
  return (
    <Rotate>
    <div className='d-flex' style={{height:"45em",margin:"auto"}}>
        <div className="container" style={{height:"465px",width:"30rem",backgroundColor:"#ffffcc",margin:"auto",alignItems:"center",justifyContent:"center",borderRadius:"10px",margin:"auto"}}>
          <b style={{textAlign:"center",display:"block",margin:"10px"}}>Our Services include:</b>
            <div style={{display:"flex",alignItems:"stretch",justifyContent:"center"}}>
            <br/>
            <div className="card" style={{margin:"5px",height:"350px",width:"250px"}}>
              <img src="https://media.istockphoto.com/photos/person-withdrawing-money-from-a-atm-machine-picture-id1072288242?k=20&m=1072288242&s=612x612&w=0&h=TRqxDKNg7kCck5-sFxfA7f9mHyzSUtZYcoyg9l-gQGs=" style={{height:"150px"}} className="card-img-top" alt=""/>
              <div className="card-body">
                <h5 className="card-text">Deposit Money</h5>
                <p className="card-text">Easily deposit money in your account throught this service</p>
              </div>
            </div>
            <div className="card" style={{margin:"5px",height:"350px",width:"250px"}}>
              <img src="https://media.istockphoto.com/photos/bank-sign-on-a-modern-glass-building-3d-render-picture-id1277143096?k=20&m=1277143096&s=170667a&w=0&h=-kTvPQ2luREcuRkqhfZwGL4gagv8ecCOp_QyA1UjRhs=" className="card-img-top" style={{height:"150px"}} alt=""/>
              <div className="card-body">
                <h5 className="card-text">Display Bank Balance</h5>
                <p className="card-text">Check your bank Balance easily through this service</p>
              </div>
            </div>
            </div>
        </div>
    </div>
    </Rotate>
  )
}
