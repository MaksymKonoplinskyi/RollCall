import React from 'react';
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'


// import Outh from './../Outh/Outh';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://kpi.ua/files/kpi_0.png' />
            {/* <Outh /> */}
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}


            </div>
        </header>
    )
}

export default Header