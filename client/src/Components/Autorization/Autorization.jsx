import React from 'react';
import s from './Autorization.module.css'
import { NavLink } from 'react-router-dom'


// import Outh from './../Outh/Outh';

const Autorization = (props) => {
    return (
        <header className={s.header}>
            <img src='https://kpi.ua/files/kpi_0.png' />
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}


            </div>
        </header>
    )
}

export default Autorization