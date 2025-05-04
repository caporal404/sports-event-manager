/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../styles/Header.css';

const Header = ({ children }) => {
    const [showActions, setShowActions] = useState(false);

    return (
        <header>
            <div className='logo'>Sports Events</div>
            {children}
            <div className="user-actions">
                <div className="user-logo" onClick={() => setShowActions(!showActions)}>
                    <i className="fas fa-user"></i>
                </div>
                {showActions && <div className="actions">
                    <a href="#">Se connecter</a>
                    <a href="#">S&apos;inscrire</a>
                </div>}
            </div>
        </header>
    );
  };
  
  export default Header;