import '../App.css';
import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import ContextSearch from '../HomePage/context'


function Header(){

    let { searchValue, SetSearchValue } = useContext(ContextSearch);


       
    return(
             <div className="header-dark">
            <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
                <div className="container"><a className="navbar-brand" href="#">Knifes shop</a><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <Link to='/newtool' className="nav-item" role="presentation"></Link>
                        <ul className="nav navbar-nav">
                            <li><Link to='/newtool' className="nav-link" role="presentation">New Tool</Link></li>
                            <li className="dropdown"><a className="dropdown-toggle nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#">Dropdown </a>
                                <div className="dropdown-menu" role="menu"><a className="dropdown-item" role="presentation" href="#">First Item</a><a className="dropdown-item" role="presentation" href="#">Second Item</a><a className="dropdown-item" role="presentation" href="#">Third Item</a></div>
                            </li>
                        </ul>
                       <div className="w-25 me-5"></div>
                        <form className="form-inline mr-auto col-sm-4" target="_self">
                            <input type="search" className="form-control form-control-dark " placeholder="Search..." onChange={(event) => { SetSearchValue( searchValue = event.currentTarget.value)  }} aria-label="Search"></input>
                        </form>
                         <div className="p-2"></div>
                        <span className="navbar-text">
                            <Link to='/login' className="login">Log In</Link>
                        </span>
                        <a className="btn btn-light action-button" role="button" href="#">Sign Up</a>
                    </div>
                </div>
            </nav>
        </div>
    )
};


export default Header;