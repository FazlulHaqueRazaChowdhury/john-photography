import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import './Header.css';
import auth from '../../firebase.init';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <header>
            <div className="container">
                <div className="d-flex w-100 justify-content-between align-items-center">
                    <div className="first-two d-flex">
                        <CustomLink to='/'>HOME</CustomLink>
                        <CustomLink to='/blogs'>BLOGS</CustomLink>
                    </div>
                    <div className="title d-flex flex-column align-items-center">
                        <h2 className='special'>JOHN</h2>
                        <small>PRODUCTION</small>
                    </div>
                    <div className="second-two d-flex align-items-center">
                        <CustomLink to='/about'>ABOUT</CustomLink>
                        {user ? <button onClick={() => { signOut(auth) }}>SIGN OUT</button> : <CustomLink to='/logIn'>LOG IN</CustomLink>}
                        <div className='text-white ms-3'>  {user?.displayName && user?.displayName || user?.email && user.email}</div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;