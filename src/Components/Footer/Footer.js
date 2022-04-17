import React from 'react';
import './Footer.css';
const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='p-5'>
            <div className="text-center ">

                <div className="special">
                    <h1>JOHN</h1>
                </div>
                <div>
                    <p>PRODCUTION</p>
                </div>
                <p>Create by FHRC AIMAN</p>
                <p>Copyright reserverd &copy; {year}</p>
            </div>

        </footer>
    );
};

export default Footer;