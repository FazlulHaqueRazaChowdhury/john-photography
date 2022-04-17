import React from 'react';

const Testomonial = ({ tst }) => {
    const { img, name, qoute } = tst;
    return (
        <div>

            <div className="testmonial shadow p-4 d-flex flex-column align-items-center jusitfy-content-center">
                <div className="img">
                    <img src={img} alt="profile" className='img border rounded-circle' />
                </div>
                <div className="texts">
                    <h5>
                        {name}
                    </h5>
                    <p className='text-secondary'>{qoute}</p>
                </div>
            </div>
        </div>
    );
};

export default Testomonial;