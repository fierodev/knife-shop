import '../App.css';
import React, { useState, useRef } from 'react';


function Header(){
    

    return(
             <div className="header-dark">
            <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
                <div className="container"><a className="navbar-brand" href="#">Company Name</a><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse"
                        id="navcol-1">
                        <ul className="nav navbar-nav">
                            <li className="nav-item" role="presentation"><a className="nav-link" href="#">Link</a></li>
                            <li className="dropdown"><a className="dropdown-toggle nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#">Dropdown </a>
                                <div className="dropdown-menu" role="menu"><a className="dropdown-item" role="presentation" href="#">First Item</a><a className="dropdown-item" role="presentation" href="#">Second Item</a><a className="dropdown-item" role="presentation" href="#">Third Item</a></div>
                            </li>
                        </ul>
                        <form className="form-inline mr-auto" target="_self">
                            <div className="form-group"><label htmlFor="search-field"><i className="fa fa-search"></i></label><input className="form-control search-field" type="search" name="search" id="search-field"/></div>
                        </form><span className="navbar-text"><a href="#" className="login">Log In</a></span><a className="btn btn-light action-button" role="button" href="#">Sign Up</a></div>
                </div>
            </nav>
            {/* <div className="container hero">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h1 className="text-center">The Truth is out there.</h1>
                        <div className="embed-responsive embed-responsive-16by9"><iframe className="embed-responsive-item" src="https://www.youtube.com/embed/hAAlDoAtV7Y" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                    </div>
                </div>
            </div> */}
        </div>
    )
};

export default Header;