import React,{useState} from 'react'
import './Login.scss'
import person from '../../assets/images/person2.svg'
import menubar from '../../assets/images/menubar.svg'

export const Login = () => {

    const [showLoginMenu,setShowLoginMenu] = useState(false);

    const showMenu = () => {
        setShowLoginMenu(!showLoginMenu)
    }
    return (
        <button className="loginButton" onClick={showMenu}>
            <span className="loginButton__menubar">
                <img src={menubar} alt="menubar"/>
            </span>
            <span className="loginButton__person">
                <img src={person} alt="person icon"/>
            </span>
        </button>
    )
}

export default Login