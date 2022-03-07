import React from 'react'

function CarItem({id, name, manufacturerName}) {
  return (
    <div className='car-item'>
        <div className="content">
            <div className="car-info">
                <h3>{manufacturerName} {name}</h3>
                <div className="specs">
                    
                </div>
            </div>
            <div className="car-img">
                <img src='https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' alt="" />
            </div>
        </div>
    </div>
  )
}

export default CarItem