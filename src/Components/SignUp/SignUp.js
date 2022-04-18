
import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignUp = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const [signInWithGoogle, googleUser, googleloading, googleError] = useSignInWithGoogle(auth);
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errorInfo, setErrorInfo] = useState({
        emailError: '',
        passwordError: '',
        confirmError: ''
    })

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [sendEmailVerification, sending, error2] = useSendEmailVerification(
        auth
    );

    const handleEmail = e => {
        let validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrorInfo({ ...errorInfo, emailError: <p className='text-success'>Email is valid</p> })

        }
        else {
            setUserInfo({ ...userInfo, email: '' });
            setErrorInfo({ ...errorInfo, emailError: <p className='text-danger'>Email is invalid</p> })
        }
    }
    const handlePassword = e => {
        let validPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(e.target.value);
        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrorInfo({ ...errorInfo, passwordError: <p className='text-success'>Strong Password</p> })
            console.log(errorInfo)
            return
        }
        else {
            setUserInfo({ ...userInfo, password: '' });
            setErrorInfo({ ...errorInfo, passwordError: <p className='text-danger'>Minimum 6 characters, one special characters, one number and one letter.</p> })
            return
        }

    }
    const handleConfirm = e => {

        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPassword: e.target.value });
            setErrorInfo({ ...errorInfo, confirmError: <p className='text-success'>Password Matches</p> });


        }
        else {
            setUserInfo({ ...userInfo, confirmPassword: '' })
            setErrorInfo({ ...errorInfo, confirmError: <p className='text-danger'>Password didn't match</p> })
            return
        }

    }
    const handleSignup = event => {
        event.preventDefault();
        if (userInfo.confirmPassword === userInfo.password) {
            toast('Email Verification send to user')
            createUserWithEmailAndPassword(userInfo.email, userInfo.password);
            return;
        }

    }
    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user])
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
    return (
        <div>
            <div className="form">
                <Header></Header>
                <h1 className='special text-center text-white  mt-4'>Sign Up</h1>

                <Form className='text-white container' onSubmit={handleSignup}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onBlur={handleEmail} placeholder="Enter email" required />
                        {
                            errorInfo.emailError
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                        {
                            errorInfo.passwordError
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onBlur={handleConfirm} type="password" placeholder="Confirm Password" required />
                        {
                            errorInfo.confirmError
                        }
                    </Form.Group>
                    <div>

                    </div>
                    <CustomLink to='/logIn'><p> Already have an account? </p></CustomLink>
                    <Button variant="outline-secondary" type="submit">
                        Sign Up
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

export default SignUp;