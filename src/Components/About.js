import React from 'react'
import about from './about.css'

export default function About() {
  
  return (
    <div className='container  my-2'>
      <div className={about.articles}>
      <img className={`img-fluid img-thumbnail ${about.picture}`} style={{
        width: "7000px",
        height: "95vh"
      }} src="https://cloudinary.hbs.edu/hbsit/image/upload/s--wx5D2ABw--/f_auto,c_fill,h_375,w_750,/v20200101/5393409F6FB391494111C5EC16653C89.jpg" alt=""/>
        <ul className={about.headers}>
          <li>BayBank, a BayCorp subsidiary, is an Indian financial institution and regional bank. </li>
          <li>It was established in 2010 and having 20+ branches across the country.</li>
          <li>We are one of the largest and trusted bank in India.</li>
          </ul>
      </div>
    </div>
  )
}
