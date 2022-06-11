import React from 'react'
import {Navigate} from 'react-router-dom'


export default function Services1() {
  const myStyle = 
    {display: "block",
    margin: "auto",
    marginTop:"10px",
  }
  return (
    <div className='container d-flex' style={{alignItems:"center",justifyContent:"center",height:"600px",width:"400px",border:"5px"}}>
        <form method="post" action="/first">
            <label htmlFor="username" style={myStyle}>Please enter your username</label>
                <input type="text" id='username' name='Username' style={myStyle}/>
            <label htmlFor="bb" style={myStyle}>Please enter the amount of your first deposit</label>
            <input type="text" id='bb' name='bankBalance' style={myStyle}/>
            <button className='btn btn-dark' style={{display: "block",marginTop: "10px"}}><Navigate to="/services2">Go to Services</Navigate></button>
        </form>
      
    </div>
  )
}


