import React from 'react'
import './Nav.scss'
import flag from '../../assets/images/india.svg'
import logo from '../../assets/images/logo2.png'
import Login from '../Login/Login'
import AddProperty from '../AddProperty/AddProperty'
import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <>
            {/* <div className="locale">
            <img  src={flag} alt="country_flag"/>
            <p>IND</p>
        </div> */}
            <div className="nav">
                <Link className="nav__logo" to="/">
                    <div >
                        <img id="logo" src={logo} alt="logo" />
                    </div>
                </Link>

                <div className="nav__right">
                    <div className="nav__right__add">
                        <AddProperty />
                    </div>
                    <div className="nav__right__login">
                        <Login />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Nav