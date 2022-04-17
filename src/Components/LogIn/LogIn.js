import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Login.css'


const LogIn = () => {

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',

    });

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleloading, googleerror] = useSignInWithGoogle(auth);

    const handleEmail = e => {
        let validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });


        }
        else {
            setUserInfo({ ...userInfo, email: '' });

        }
    }
    const handlePassword = e => {
        let validPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(e.target.value);
        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });

        }
        else {
            setUserInfo({ ...userInfo, password: '' });

        }

    }

    const handleSignIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password)
    }
    useEffect(() => {
        if (user) {
            navigate(from)
        }
    }, [user])
    useEffect(() => {
        if (googleUser) {
            navigate(from)
        }
    }, [googleUser])
    return (
        <div>

            <div className="form">
                <Header></Header>
                <h1 className='special text-center text-white  mt-4'>Log In</h1>

                <Form className='text-white container' onSubmit={handleSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onBlur={handleEmail} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onBlur={handlePassword} />
                    </Form.Group>
                    <CustomLink to='/signUp'><p> Don't have an account? </p></CustomLink>
                    <Button variant="outline-secondary" type="submit">
                        Log In
                    </Button>

                </Form>
                <div className="line text-white">
                    <div>

                    </div>
                    <p>Or</p>
                    <div></div>
                </div>
                <div className="signInWith d-flex justify-content-center">
                    <Button onClick={() => {
                        signInWithGoogle()

                    }}> Sign In With Google</Button>
                </div>
            </div>

            <Footer></Footer>
        </div>

    );
};

export default LogIn;