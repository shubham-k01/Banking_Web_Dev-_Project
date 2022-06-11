import React from 'react'
import { Link } from 'react-router-dom'

export default function Services2() {
    return (
        <div className='container d-flex' style={{alignItems:"center",justifyContent:"center",height:"500px",width:"600px"}}>
            <div className="card" >
                <img src="https://media.istockphoto.com/photos/person-withdrawing-money-from-a-atm-machine-picture-id1072288242?k=20&m=1072288242&s=612x612&w=0&h=TRqxDKNg7kCck5-sFxfA7f9mHyzSUtZYcoyg9l-gQGs=" className="card-img-top" alt="Atm image" />
                <div className="card-body">
                    <h5 className="card-title">Display bank Balance</h5>
                    <p className="card-text">Check your bank balance in a quick peek.</p>
                    <a href="/bal" className="btn btn-primary">Check balance</a>
                </div>
            </div>
                <div className="card" >
                    <img src="https://files.prokerala.com/news/photos/imgs/1024/amritsar-a-deserted-office-of-the-state-bank-of-india-during-a-866737.jpg" className="card-img-top" alt="bank image" />
                    <div className="card-body">
                        <h5 className="card-title">Deposit money in your account</h5>
                        <p className="card-text">Deposit money quickly in your account</p>
                        <a href="/mon" className="btn btn-primary">Deposit Money</a>
                    </div>
                </div>
            </div>
            )
}
