import React from 'react'

export default function About() {

  return (
    <div className='container  my-2'>
      <article >
        <img className={`img-fluid img-thumbnail`} style={{
          width: "7000px",
          height: "95vh"
        }} src="https://cloudinary.hbs.edu/hbsit/image/upload/s--wx5D2ABw--/f_auto,c_fill,h_375,w_750,/v20200101/5393409F6FB391494111C5EC16653C89.jpg" alt="" />
        <div className='container'>
          <h2>About Us:</h2>
          <ul style={{ fontFamily: "'Charis SIL', serif", fontSize: "30px",color:"black" }}>
            <li>BayBank, a BayCorp subsidiary, is an Indian financial institution and regional bank. </li>
            <li>It was established in 2010 and having 20+ branches across the country.</li>
            <li>We are one of the largest and trusted bank in India.</li>
          </ul>
        </div>
      </article>
    </div>
  )
}
