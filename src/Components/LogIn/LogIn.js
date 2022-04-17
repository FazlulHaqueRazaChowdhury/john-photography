import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';

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
    const [signInWithGoogle, googleUser, googleloading, googleError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending, error3] = useSendPasswordResetEmail(
        auth
    );
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

    const handlePassReset = async () => {
        if (userInfo.email !== '') {
            await sendPasswordResetEmail(userInfo.email);
            toast('Sent email')
        } else {
            toast('Please Give A Mail to Reset The password !')
        }

    }
    const handleSignIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword(userInfo.email, userInfo.password)
    }
    // using for navigate 
    useEffect(() => {
        if (user) {
            navigate(from)
        }
    }, [user])
    // using for navitage if google user 
    useEffect(() => {
        if (googleUser) {
            navigate(from)
        }
    }, [googleUser])

    useEffect(() => {
        if (error) {


            switch (error?.code) {
                case 'auth/email-already-in-use':
                    toast('Email Already Exists')
                    break;
                case 'auth/invalid-email':
                    toast('Email Is invalid')
                    break;
                case 'auth/invalid-password':
                    toast('Password is invalid')
                    break;
                case 'auth/user-not-found':
                    toast('Please Sign Up')
                    break;
                case 'auth/internal-error':
                    toast('Wrong Password or Email')
                    break;
                default:
                    toast('something went wrong');
                    break;
            }

        }
    }, [error])
    useEffect(() => {
        if (googleError) {
            switch (googleError?.code) {
                case 'auth/email-already-in-use':
                    toast('Email Already Exists')
                    break;
                case 'auth/invalid-email':
                    toast('Email Is invalid')
                    break;
                case 'auth/invalid-password':
                    toast('Password is invalid')
                    break;
                default:
                    toast('something went wrong');
                    break;

            }
        }
    }, [googleError])
    if (sending) {
        return 'A Password Reset Link is sending to your Email!';
    }
    return (
        <div>

            <div className="form">
                <Header></Header>
                <h1 className='special text-center text-white  mt-4'>Log In</h1>

                <Form className='text-white container' onSubmit={handleSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={handleEmail} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={handlePassword} />
                    </Form.Group>
                    <button className='underline text-white' onClick={handlePassReset}>Forgot Your Password?</button>
                    <CustomLink to='/signUp'><p className='underline'> Don't have an account? </p></CustomLink>

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

            <ToastContainer />
        </div>

    );
};

export default LogIn;