import React from 'react'
import { Link } from 'react-router-dom'

export default function Services2() {
    return (
        <div className='d-flex' style={{height:"45em",alignItems:"center",justifyContent:"center"}}>
        <div className='container d-flex' style={{backgroundColor:"#ccffcc",height:"30em",width:"35em",alignItems:"center",justifyContent:"center"}}>
            <div className="card" style={{margin:"10px",height:"350px",width:"900px"}} >
                <img  src="https://media.istockphoto.com/photos/person-withdrawing-money-from-a-atm-machine-picture-id1072288242?k=20&m=1072288242&s=612x612&w=0&h=TRqxDKNg7kCck5-sFxfA7f9mHyzSUtZYcoyg9l-gQGs=" className="card-img-top img-fluid" alt="Atm image" />
                <div className="card-body">
                    <h5 className="card-title">Display bank Balance</h5>
                    <p className="card-text">Check your bank balance in a quick peek.</p>
                    <Link to="/bal" className="btn btn-primary">Check balance</Link>
                </div>
            </div>
                <div className="card"style={{margin:"10px",height:"350px",width:"900px"}} >
                    <img  src="https://files.prokerala.com/news/photos/imgs/1024/amritsar-a-deserted-office-of-the-state-bank-of-india-during-a-866737.jpg" className="card-img-top img-fluid" alt="bank image" />
                    <div className="card-body">
                        <h5 className="card-title">Deposit money in your account</h5>
                        <p className="card-text">Deposit money quickly in your account</p>
                        <Link to="/mon" className="btn btn-primary">Deposit Money</Link>
                    </div>
                </div>
            </div>
            </div>
        // <div>HI</div>
            )
}
