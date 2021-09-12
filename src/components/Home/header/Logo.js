import React from 'react';
import { Link } from 'react-router-dom';
function Logo() {
		return (
            <div className="col l-2">    
                <Link to="/" className="header-logo">
                <img src="/images/logo.svg" alt="logo" />
                </Link>
            </div>
		)
}

export default Logo;