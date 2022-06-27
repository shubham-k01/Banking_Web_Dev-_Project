import React from 'react'

export default function Balance() {
  const myStyle = 
  {display: "block",
  margin: "auto",
  marginTop:"10px",
}
  return (
    <div className='container d-flex' style={{height:"45em",alignItems:"center",justifyContent:"center"}}>
        <form method="post" action="/getbal">
            <label htmlFor="username" style={myStyle}>Please enter your username</label>
            <input type="text" id='username' name='Username' style={myStyle} required/>
            <label htmlFor="pass" style={myStyle}>Please enter your password</label>
            <input type="password" id='pass' name='password' style={myStyle} required/>
            <button className='btn btn-dark' style={{display:"block",marginTop:"10px"}}>Display Balance</button>
        </form>
      
    </div>
  )
}
