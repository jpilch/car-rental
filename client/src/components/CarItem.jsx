import '../css/CarItem.css'
import React from 'react'

const CarItem = (props) => {
    const imgStyle = {
        maxWidth: '10rem',
        height: 'auto',
        borderRadius: '1rem'
    }

    return (
        <div className='car-item'>
            <img style={imgStyle} src={props.img_url} alt=""/>
            <div className="car-info">
                <h2>{props.manufacturer} {props.name}</h2>
                <div className="car-specs">
                    <p>test</p>
                    <p>test</p>
                </div>
            </div>
        </div>
    )
}

export default CarItem