import React from 'react'
import {Link} from 'react-router-dom'
import {Zoom,Fade,Rotate,Flip,Bounce, Roll} from 'react-reveal'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">BayBank</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                        </ul>
                        <form className="d-flex ms-auto" role="search">
                            <Zoom>
                            <button className="btn btn-outline-success btn-light mx-2" type="submit" ><Link to="/login" style={{textDecoration:"None"}}>Login</Link></button>
                            <button type="submit" className="btn btn-outline-success btn-light mx-2" ><Link to="/signup" style={{textDecoration:"None"}}>Sign Up</Link></button>
                            </Zoom>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
