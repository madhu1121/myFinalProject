import React from 'react'
import './Nav.scss'
import flag from '../../assets/images/india.svg'
import Login from '../Login/Login'
import AddProperty from '../AddProperty/AddProperty'

export const Nav = () => {
    return (
        <>
            {/* <div className="locale">
            <img  src={flag} alt="country_flag"/>
            <p>IND</p>
        </div> */}
            <section className="nav">
                <div className="nav__add">
                    <AddProperty />
                </div>
                <div className="nav__login">
                    <Login />
                </div>
            </section>

        </>
    )
}

export default Nav