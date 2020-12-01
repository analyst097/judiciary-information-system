import React, {Component} from 'react';
import {Link} from 'react-router-dom';
var values = require('../values');

export default class Navbar extends Component{
    
    logout=()=>{
        localStorage.setItem('username','notexists');
        window.location='/';
    }
    render(){
        const user = localStorage.getItem('username');
        const registrar = localStorage.getItem('registrar');
        console.log(user);
        return(
            <nav className="navbar">
                <Link  className="navbar-brand">Judiciary Information System</Link>
                <div className="collapse">
                    <ul className="navbar-nav">
                    
                    {
                            user ==='exists' && (
                                <>   
                                    <li className="navbar-item">
                                        <Link to="/create" className="nav-link">Create Cases</Link>
                                    </li>         
                                    <li className="navbar-item">
                                        <Link to="/caseList" className="nav-link">Cases</Link>
                                    </li>
                                 
                                    <li className="navbar-item">
                                        <Link onClick={this.logout} className="nav-link">Logout</Link>
                                    </li>
                                </>
                            )
                     }
                       
                        {
                            user!=='exists' && (
                                <>
                                     <li className="navbar-item">
                                        <Link to="/RegisterUser" className="nav-link">Register</Link>
                                    </li>
                                    <li className="navbar-item">
                                        <Link to="/" className="nav-link">Login</Link>
                                    </li>
                                </>
                            )
                     }
                    </ul>
                </div>
            </nav>
        )
    }
}