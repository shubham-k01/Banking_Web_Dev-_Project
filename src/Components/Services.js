import React from 'react'
import { Fade, Rotate, Zoom } from 'react-reveal'

export default function Services() {
  return (
    <Rotate>
    <div className='d-flex' style={{justifyContent:"center",alignItems:"center",height:"35em"}}>
        <div className="container d-flex " style={{height:"300px",width:"400px",backgroundColor:"#ffffcc",margin:"auto",alignItems:"center",justifyContent:"center",borderRadius:"10px"}}>
            <ul>
            <b style={{display:"block"}}>Our Services include:</b>
            <br/>
                <li>Display Bank Balance</li>
                <li>Deposit Money in your account</li>
                <li>Transfer Money</li>
            </ul>
        </div>
    </div>
    </Rotate>
  )
}
