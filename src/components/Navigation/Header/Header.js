import React from 'react';
import Link from '../Link/Link';
import GoogleAuth from '../../GoogleAuth/GoogleAuth';
import { signInWithGoogle} from '../../../Firebase/firebase.utils';

import { auth } from '../../../Firebase/firebase.utils';

const Header = ({ currentUser }) => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className="item">Dashboard</Link>
            <Link href="/settings" className="item">Settings</Link>
            <Link href="/food-search" className="item">Search Food</Link>
            <div className="right menu">
                {
                    currentUser ?
                    <button className="ui red button" onClick={() => auth.signOut()}>Sign Out</button>
                    :
                    <button className="ui primary button" onClick={signInWithGoogle}>Sign in with Google</button>
                }
                
            </div>
        </div>
    );
};

export default Header;