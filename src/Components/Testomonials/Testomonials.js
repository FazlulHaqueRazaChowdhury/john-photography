import React from 'react';
import { Carousel } from 'react-bootstrap';

import Testomonial from '../Testomonial/Testomonial';

const Testomonials = () => {
    const testomonial = [
        { id: 1, img: 'https://i.ibb.co/SXg73x7/profile-2.jpg', name: 'John Doel', qoute: "Highly Recommened. He is very professional and talented. The photos were amazing. Will also hire for my next project." },
        { id: 2, img: 'https://i.ibb.co/Yk2MdZJ/profile-3.jpg', name: 'Tek Miang', qoute: "Highly Recommened. He is very professional and talented. The photos were amazing. Will also hire for my next project." },
        { id: 3, img: 'https://i.ibb.co/GxS5DBz/profile-1.jpg', name: 'Mr Billu', qoute: "Highly Recommened. He is very professional and talented. The photos were amazing. Will also hire for my next project." },
    ]
    return (
        <div className='container margin-100'>
            <div className="special text-center">
                <h1>Testomonials</h1>
            </div>
            <div className="testomonial row row-cols-1 row-cols-lg-3 mt-5 gy-2">
                {
                    testomonial.map(tst => <Testomonial key={tst.id} tst={tst} />)
                }
            </div>
        </div>

    );
};

export default Testomonials;