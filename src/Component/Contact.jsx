import React from 'react'
import back from '../assets/contact.jpg'

const Contact = () => {
  const contact = {
    backgroundImage: `url(${back})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%'
  }
  return (
    <div className='text-center text-danger fs-3 fw-bold' style={contact}>
        <h1 className='container p-5 text-light'>Contact</h1>

        
          <p> Email : nehaagaikwad15@gmail.com </p>
          <p>Phone : 8975189080</p>
           <h5>Social : </h5>
           <p>Linkdin - Neha Gaikwad</p>
           <a href=" https://github.com/Nyav9080">github - https://github.com/Nyav9080</a>
        </div>
      
  )
}

export default Contact