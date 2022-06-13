import React from 'react'
import {Link} from 'react-router-dom'


export default function Services1() {
  const myStyle = 
    {display: "block",
    margin: "auto",
    marginTop:"10px",
  }
  return (
    <div className='container d-flex' style={{alignItems:"center",justifyContent:"center",height:"600px",width:"400px",border:"5px"}}>
        <form method="post" action="/first">
            <label htmlFor="username" style={myStyle}>Please enter your username: </label>
            <input type="text" id='username' name='Username' style={myStyle} required/>
            <label htmlFor="pass" style={myStyle}>Please enter your password: </label>
            <input type="password" id='pass' name='password' style={myStyle} required/>
            <label htmlFor="bb" style={myStyle}>Please enter the amount of your first deposit: </label>
            <input type="number" id='bb' name='bankBalance' style={myStyle} required/>
            <button className='btn btn-dark' style={{display:"block",marginTop:"10px"}}>Go to Services</button>
        </form>
      
    </div>
  )
}


