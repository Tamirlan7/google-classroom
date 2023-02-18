import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';


const NotFound: React.FC = () => {
    return (
        <div className='not__found-page'>
            <h1 className='not__found-title'>404 NOT FOUND</h1>
            <p className='not__found-text'>There is no page with such URL</p>
            <Link className='not__found-button' to={'/'} role="button">Go Home Page</Link>
        </div>
    );
}

export default NotFound;
