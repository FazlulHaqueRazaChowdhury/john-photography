import React from 'react';
import Header from '../Header/Header';
import './ErrorPage.css'
const ErrorPage = () => {
    return (
        <div className='errorPage'>
            <Header />
            <h1 className='special text-white margin-100 container'>Ops! Page is not found.</h1>
        </div>
    );
};

export default ErrorPage;