import React from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const service = [
        {
            id: 1,
            bg: 'https://i.ibb.co/VH8j81z/billu-1.png',
            name: 'Portrait',
            price: '800',
            feature1: 'Shooting time 5 hours',
            feature2: 'Simple Photo Processing'
        },
        {
            id: 2,
            bg: 'https://i.ibb.co/N1409k2/wedd-1.png',
            name: 'Wedding',
            price: '1600',
            feature1: 'Shooting time 12 hours',
            feature2: 'Professional Photo Processing'
        },
        {
            id: 3,
            bg: 'https://i.ibb.co/3m6HPDx/film.png',
            name: 'Short Film',
            price: '2000',
            feature1: 'Shooting time 12 hours',
            feature2: 'Film up to 15 minutes'
        },
    ]
    return (
        <div className='services'>
            <div className="special">
                <h1 className='text-center'>Services</h1>

            </div>
            <p className='text-secondary text-center'>I shoot animals, humans and the darling nature.</p>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 w-100 justify-content-center mt-4 cards gy-3">
                    {
                        service.map(
                            service => <Service key={service.id} service={service}></Service>
                        )

                    }
                </div>
            </div>
        </div>
    );
};

export default Services;