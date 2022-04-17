
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import './Checkout.css';
import CheckoutCart from '../CheckoutCart/CheckoutCart';
const Checkout = () => {

    const params = useParams();
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <p>Loading...</p>
    }

    const service = [
        {
            id: 1,
            bg: 'https://i.ibb.co/YyFxCHv/yulia-matvienko-WPu-VX6h-Wheo-unsplash.jpg',
            name: 'Portrait',
            price: '800',
            feature1: 'Shooting time 5 hours',
            feature2: 'Simple Photo Processing'
        },
        {
            id: 2,
            bg: 'https://i.ibb.co/WzHH4y6/samantha-gades-x40-Q9jr-EVT0-unsplash.jpg',
            name: 'Wedding',
            price: '1600',
            feature1: 'Shooting time 12 hours',
            feature2: 'Professional Photo Processing'
        },
        {
            id: 3,
            bg: 'https://i.ibb.co/wKXHz5L/noom-peerapong-2uw-FEAGUm6-E-unsplash.jpg',
            name: 'Short Film',
            price: '2000',
            feature1: 'Shooting time 12 hours',
            feature2: 'Film up to 15 minutes'
        },
    ]

    const onCheckout = service.find(product => params.id == product.id);


    return (

        <div>




            {
                onCheckout?.bg
                    ? <div className="checkout-cart" style={{ backgroundImage: `url(${onCheckout?.bg})` }}>
                        <Header></Header>
                        <CheckoutCart service={onCheckout} ></CheckoutCart>
                    </div> : <div className='checkout-cart'><Header></Header><h1> Product Not Found </h1></div>
            }



            <Footer></Footer>
        </div>
    );
};

export default Checkout;