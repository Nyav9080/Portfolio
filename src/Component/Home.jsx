
import React from 'react'
import resume from '../Resume/Nehaa-90.pdf'

function Home() {
let whatsapp_message="https://wa.me/918975189080?text=I want to hire you"
  return (
    <div className='container-fluid bg-dark text-light min-vh-100 d-flex justify-content-center align-item-center'>
        <div className="d-flex flex-column justify-content-center align-item-center text-center ">

            <h1>Hii,I am <span className='text-danger display-2 fw-bold'> neha</span></h1>
           
          <div>
         <a href="About"> <button className='btn btn-danger  ' style={{width:"40%"}}>About Me</button></a>
          </div>
           <div className='mt-4'>
            <a href={resume} className='btn-btn-outline-danger mx-3' download>Download Resume</a>
            <a href={whatsapp_message} className='btn-btn-danger'>connect to watsapp</a>
           </div>
        </div>
        </div>
       
  )
}

export default Home