import React from 'react'

function Project() {
  return (
    <div className=''>

      <div className='main-container'>
        <h1 className='text-center mb-4'>
          Projects
        </h1>
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0 mb-3">
          <div className="card">
          <div className="card-body">
           <h5 className='card-title'>Personal Portfolio</h5> 
           <p>This is web based project which is made by using ReactJs,Bootstrap,Javascript & HTML.In this project I provided service to download resume & connect to watsapp.In this projet I have added my own ceated projects.</p> 
           <a href="#" className='btn btn-danger'>Read more</a>
          </div>
          </div>
          </div>

            <div className='col-sm-6 mb-3'>
            <div className='card'>
            <div className='card-body'>
            <h5 className='card-title'>Student Management System</h5>
            <p className='card-text'>
              This student management system project made by HTML,Css,Javascript,React.In this project we adding student form with CRUD operation & fetch student data from database & resister students and store their education details & time schedule.
            </p>
            <a href="#" className='btn btn-danger'>Read more</a>
            </div>
            </div>
            </div>
           
            <div className="col-sm-6 mb-3">
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>OLX Clone</h5>
                  <p className='card-text'>
                    This is web clone of olx website which is made by using ReactJs,Bootstrap & HTML.In this project I provided a service to search products which we want & I have use react API system to store date and fetch all data of user.
                  </p>
                  <a href="#" className='btn btn-danger'>Read More..</a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 mb-3">
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>TODO List</h5>
                  <p className='card-text'>
                    In this project we can add todo , delete todo and display todo.All these operations perform by using HTML Css,Javascript,BootsStrap and ReactJs.There is no limitations of todos , we can create so many todos.
                  </p>
                  <a href="#" className='btn btn-danger'>Read More..</a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Project