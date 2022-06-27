import React from 'react'

export default function Home() {
  
  return (
    <div className='container my-2' style={{height:"105vh"}} >
      
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false" style={{height:"95vh"}}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active bg-dark" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src="https://media.istockphoto.com/photos/business-world-picture-id496993957?k=20&m=496993957&s=612x612&w=0&h=XM7m_M05ajMl6k-12Y5l9K8Jfalye6YI54v_h3eFSwA="  className="d-block w-100 imgsr" alt="..."/>
            <div className="carousel-caption d-none d-md-block text-dark">
              <h2><b style={{color:"white"}}>Welcome to BayBank</b> </h2>
              <p style={{color:"white"}}>A global bank with a local feel</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://media.istockphoto.com/photos/small-trees-on-a-pile-of-gold-coins-and-a-natural-green-background-picture-id1272178182?k=20&m=1272178182&s=612x612&w=0&h=oCe2vKG58b9rj2bjV6Qd3KLG6dNs6wamFsqS6Wkr2Dc=" className="d-block w-100 imgsr" alt="..."/>
            <div className="carousel-caption d-none d-md-block text-dark">
            <h4><b style={{color:"black"}}>All your finances managed easily</b></h4>
            <p style={{color:"white"}}></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://cdn2.hubspot.net/hubfs/53/Untitled%20design-14.png" className="d-block w-100 imgsr" alt="..."/>
            <div className="carousel-caption d-none d-md-block text-dark">
              <h4><b style={{color:"black"}}>Trust is the foundation of our bank</b></h4>
              <p></p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark"  aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
