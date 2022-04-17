import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Checkout = () => {
    const params = useParams();

    return (

        <div>

            <Header></Header>
            {
                params.id
            }
            <Footer></Footer>
        </div>
    );
};

export default Checkout;