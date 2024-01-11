import React from 'react'
import image from '../assets/project3.jpg'

const Project = () => {
  const bgi = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%'
  }
  return (
    <div className=' text-center fs-4  p-5  text-danger ' style={bgi}>

      <a className='text-light ' href="Projects">For see more projects <button className='btn btn-danger'>Click here</button></a>
    </div>

  )
}

export default Project