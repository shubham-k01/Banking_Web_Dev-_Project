import React from 'react'
import { Link } from 'react-router-dom'

export default function Finalser() {
  return (
    <div className='container d-flex' style={{alignItems:"center",justifyContent:"center",height:"600px",width:"400px",border:"5px"}}>
      <b>The services available are :</b>
      <ul><Link to="/display">Display BankBalance</Link></ul>
      <ul><Link to="/deposit">Deposit Money</Link></ul>
    </div>
  )
}
