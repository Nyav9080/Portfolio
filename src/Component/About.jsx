import React from 'react'
// import Backgr from '../assets/Backgr.jpeg'
import back from '../assets/about.jpg'

const About = () => {
  const bg = {
    backgroundImage: `url(${back})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%'
  }
  return (

    <div className='text-center fs-1 p-5' style={bg}>
        About
      <p className='container fs-4 pb-4 text-danger p-5' style={{fontFamily: 'cursive'}}>
        My self neha.I'm from baramati.Recently I have done my bachler of computer science deggree in tuljaram chaturchand college,baramati with 64%.Currently I'm stay in akurdi.I am frontend developer and i have knowledge about HTML , CSS , BootStarp , ReactJs , MYSQL and also PHOTOSHOP.
      </p>
    </div>
  )
}

export default About