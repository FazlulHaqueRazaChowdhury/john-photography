import React from 'react';
import './Service.css'
const Service = ({ service }) => {
    const { name, feature1, feature2, price, bg } = service;
    return (
        <div className='cols'>
            <div className="card p-4 " style={{ backgroundImage: `url(${bg})` }}>
                <div className="overlay">
                    <div className="texts text-white">
                        <h3>{name}</h3>
                        <h6 className='mt-4'>{price}$</h6>
                        <h6>{feature1}</h6>
                        <h6>{feature2}</h6>
                    </div>

                    <button >BUY</button>
                </div>
            </div>

        </div>
    );
};

export default Service;