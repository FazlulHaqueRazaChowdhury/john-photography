import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Blogs.css';
const Blogs = () => {
    return (
        <div>
            <div className='blogs'>
                <Header></Header>
                <div className="container">
                    <h1 className='special text-white'> Why are you using firebase? What other options do you have to implement authentication?</h1>
                    <h1 className='special text-white'>  What other services does firebase provide other than authentication?</h1>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Blogs;