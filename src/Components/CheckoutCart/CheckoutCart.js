


import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../firebase.init';
import './CheckOutCart.css';
const CheckoutCart = ({ service }) => {
    const { name, bg, price, feature1, feature2 } = service;
    const [user, loading, error] = useAuthState(auth);

    return (
        <div className='h-100'>


            <div className="container h-100 p-4">
                <div className="row row-cols-1 row-cols-md-2 justify-content-center align-items-center h-100 ">
                    <div className="user-details text-white d-flex flex-column justify-content-center  align-items-center h-100 ">
                        <div className="group-field">
                            <label htmlFor='name' >Name</label>
                            <br />
                            <input type='text' name='name' value={user?.displayName && user?.displayName} readOnly={user?.displayName ? true : false} required />
                        </div>
                        <div className="group-field">
                            <label htmlFor='name'>Email</label>
                            <br />
                            <input type='email' name='name' value={user?.email && user?.email} readOnly={user?.email ? true : false} />
                        </div>
                        <div className="group-field">
                            <label htmlFor='name'>Address</label>
                            <br />
                            <input type='text' name='name' required />

                        </div>
                        <Button variant='success' className='mt-2' onClick={() => { toast('You Will Get A Email Soon..You Order is booked') }}>Checkout</Button>
                    </div>
                    <div className="product-details shadow-lg mt-2">
                        <div className="img">
                            <img src={bg} className="checkoutImg border rounded" alt="" />
                        </div>
                        <div className="texts text-white p-3">
                            <h1>{name}</h1>
                            <h5>{feature1}</h5>
                            <h5>{feature2}</h5>
                            <h5>Grand Total : {price}$ </h5>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CheckoutCart;