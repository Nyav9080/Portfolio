import React from 'react'
import PropTypes from 'prop-types'

const Student = (props) => {
    let{rno,name,city}=props;
    return (

        <div className="card m-3" style={{ width: "15rem" }}>
            <img src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg" className="card-img-top" alt="hello" />
            <div className="card-body">
                <h5 className="card-title">Roll No:{rno}</h5>
                <h5 className="card-title">Name:{name}</h5>
                <h5 className="card-title">City:{city}</h5>
            </div>
        </div>
    )
}
Student.propTypes = {
    rno: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
}
Student.defaultProps = {
    rno: 11111,
    name: 'Enter Name Here',
    city: 'Enter City Here'
}
    
  


export default Student