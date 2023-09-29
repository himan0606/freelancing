import React from 'react'
import { NavLink } from 'react-router-dom';
import UseAppContext from '../AppContext';

const Navbar = () => {
    const {loggedin, logout} = UseAppContext();
    const displayUserOption = () => {
        if(loggedin) {
            return <li className='nav-item'><button className='btn btn-outline-danger' onClick={logout}>Logout</button></li>
        }

    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-territory">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img height={30} src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" alt="" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-3 ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                               Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">
                                Login
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/listdevs">
                                List Developer
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="btn btn-outline-dark" to="/signup">
                                Signup
                            </NavLink>
                        </li>
                    </ul>

                    <ul className='navbar-nav mx-3 mb-2 mb-lg-0'>
                        {displayUserOption()}
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;