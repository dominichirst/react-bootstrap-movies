import React from 'react';
import { Link } from '@reach/router';

export const Navigation = () => {
    return (
        <nav className="navbar bg-dark navbar-dark navbar-expand-sm">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myTogglerNav">
                    <span className="navbar-toggler-icon"> </span>
                </button>
                <Link className="navbar-brand" to="/" >Dominic Hirst</Link>
               
                <div className="collapse navbar-collapse" id="myTogglerNav">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link nav-item active">Home</Link>

                    </div>     
                </div>
            </div>
            </nav>
     );
}
