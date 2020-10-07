import React from 'react';
import Link from '../Link/Link';
import GoogleAuth from '../../GoogleAuth/GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className="item">Dashboard</Link>
            <Link href="/settings" className="item">Settings</Link>
            <Link href="/food-search" className="item">Search Food</Link>
            <div className="right menu">
                <GoogleAuth />
            </div>
        </div>
    );
};

export default Header;