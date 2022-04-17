import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import './Header.css';
import auth from '../../firebase.init';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <header className='d-flex '>
            <div className="container">

                <Navbar bg="transparent" expand="lg">


                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <div className="d-lg-flex  w-100 justify-content-between align-items-center">
                                <div className="first-two d-hidden d-lg-flex">
                                    <CustomLink to='/'>HOME</CustomLink>
                                    <CustomLink to='/blogs'>BLOGS</CustomLink>
                                </div>
                                <div className="title d-flex flex-column align-items-center d-none d-md-none d-lg-block">
                                    <h2 className='special'>JOHN</h2>
                                    <small>PHOTOGRAPHY</small>
                                </div>

                                <div className="second-two d-lg-flex align-items-center">
                                    <CustomLink to='/about'>ABOUT</CustomLink>
                                    {user ? <button onClick={() => { signOut(auth) }}>SIGN OUT</button> : <CustomLink to='/logIn'>LOG IN</CustomLink>}
                                    <div className='text-white ms-3'>  {user?.displayName && user?.displayName || user?.email && user.email}</div>
                                </div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>

            </div>
            <div className="title d-flex flex-column align-items-center d-block d-md-block d-lg-none" >
                <h2 className='special'>JOHN</h2>
                <small>PHOTOGRAPHY</small>
            </div>
        </header>
    );
};

export default Header;