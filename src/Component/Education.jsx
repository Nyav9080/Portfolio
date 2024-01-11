import React from 'react'
import image from '../assets/tuljaram-chaturchand-college-baramati-ho-baramati-colleges-4gfu29x.jpg'

const Education = () => {
  const tc = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%'
  }
  return (
    <div className='  text-center ' style={tc}>
        <h1 className='text-info text-dark p-5 container'>Education</h1>


      <table className='table container mt-4 table-danger' style={{fontFamily: 'cursive'}} >
        <thead>
          <tr>
          <th scope="col">Sr No</th>
            <th scope="col">Qualification</th>
            <th scope="col">College</th>
            <th scope="col">Percentage</th>
            <th scope="col">Passout Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>SSC</td>
            <td>SWV walchandanagar</td>
            <td>81%</td>
            <td>2018</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>HSC</td>
            <td>SWV walchandanagar</td>
            <td>70%</td>
            <td>2020</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td >BCS</td>
            <td>TC college Baramati</td>
            <td>64%</td>
            <td>2023</td>
          </tr>
        </tbody>
      </table>
      </div>
  )
}



export default Education