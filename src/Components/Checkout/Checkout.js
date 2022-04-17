import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
const Checkout = () => {
    const params = useParams();
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <p>Loading...</p>
    }
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