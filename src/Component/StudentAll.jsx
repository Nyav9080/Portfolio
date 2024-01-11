import React from 'react'
import Student from './Student.jsx'

const StudentAll = () => {
  return (
    <div>
        <div className='d-flex'>
          <Student rno={1} name="neha" city="akurdi" />
          <Student rno={2} name="tanvi" city="hadapsar" />
          <Student rno={3} name="yuvraj" city="kothrud" />
          <Student rno={4} name="aniket" city="NDA" />
          <Student rno={5} name="chaitanya" city="dhayari"/>
        </div>
    </div>
  )
}

export default StudentAll