import React from 'react';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testomonials from '../Testomonials/Testomonials';
import './Home.css';
const Home = () => {
    return (
        <div className='Home'>
            <div className="background-image">
                <Header color="white"></Header>
                <Banner />
            </div>
            <Counter></Counter>
            <Services></Services>
            <Testomonials></Testomonials>
        </div>
    );
};

export default Home;