import React from 'react'

export default function Deposit() {
  const myStyle = 
  {display: "block",
  margin: "auto",
  marginTop:"10px",
}
  return (
    <div className='container d-flex' style={{height:"45em",alignItems:"center",justifyContent:"center"}}>
        <form method="post" action="/depm">
            <label htmlFor="username" style={myStyle}>Please enter your username: </label>
            <input type="text" id='username' name='Username' style={myStyle} required/>
            <label htmlFor="pass" style={myStyle}>Please enter your password: </label>
            <input type="password" id='pass' name='password' style={myStyle} required/>
            <label htmlFor="mon" style={myStyle}>Please enter the amount you want to deposit: </label>
            <input type="number" id='mon' name='money' style={myStyle} required/>
            <button className='btn btn-dark' style={{display:"block",marginTop:"10px"}}>Display Balance</button>
        </form>
      
    </div>
  )
}
