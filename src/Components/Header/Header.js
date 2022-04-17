import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

import './Header.css';
const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="d-flex w-100 justify-content-between align-items-center">
                    <div className="first-two d-flex">
                        <CustomLink to='/'>HOME</CustomLink>
                        <CustomLink to='/blogs'>BLOGS</CustomLink>
                    </div>
                    <div className="title d-flex flex-column align-items-center">
                        <h2 className='special'>JOHN</h2>
                        <small>PRODUCTION</small>
                    </div>
                    <div className="second-two d-flex">
                        <CustomLink to='/about'>ABOUT</CustomLink>
                        <CustomLink to='/logIn'>LOG IN</CustomLink>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;