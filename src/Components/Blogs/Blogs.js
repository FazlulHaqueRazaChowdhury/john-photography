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
                    <p className='text-secondary'>I'm Using Firebase for user authentication.So I can implement sign in and sign up. Except firebase there are also  some like Auth0 ,Prove, Okta, KeyCloack,etc. We can also those alternative of Firebase. </p>
                    <h1 className='special text-white'>  What other services does firebase provide other than authentication?</h1>
                    <p>Except Authentication we can also use Cloud Firestore to sotre and sync app data. They also provides Cloud Functions. That run our code in the cloud with no servers or containers to manage. We can also host our websites in Firebase. We store data on Cloud Storage. There are also Cloud Messaging, Google Analytics and more.  </p>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Blogs;