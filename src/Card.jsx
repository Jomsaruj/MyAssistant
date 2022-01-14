import React from 'react';

function Card(properties){
    return <div className='card'>
                <div className="top">
                    <h1 className='card-name'>{properties.name}</h1>
                    <img className='custom-img'
                    src={properties.img}
                    alt="avatar_img"
                    />
                </div>
                <div className="bottom">
                    <p className='info'>{properties.date}</p>
                    <p className='info'>{properties.message}</p>
                </div>

            </div>
}

export default Card;