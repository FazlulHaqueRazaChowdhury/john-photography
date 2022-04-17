import React from 'react';
import { Button, Form } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Login.css'


const LogIn = () => {
    return (
        <div>

            <div className="form">
                <Header></Header>
                <h1 className='special text-center text-white  mt-4'>Log In</h1>

                <Form className='text-white container'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
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
                    <Button > Sign In With Google</Button>
                </div>
            </div>

            <Footer></Footer>
        </div>

    );
};

export default LogIn;