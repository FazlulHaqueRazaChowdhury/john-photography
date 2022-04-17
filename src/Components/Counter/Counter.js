import React from 'react';
import CountUp from 'react-countup';
const Counter = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
            <div className="special">
                <h1>Relation With The World </h1>
            </div>
            <div className="counter d-flex flex-column  align-items-center mt-5">
                <h3>
                    Provided Service to <CountUp delay={1} end={500} /> people
                </h3>

            </div>

        </div>
    );
};

export default Counter;