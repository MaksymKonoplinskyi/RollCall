import React from 'react';
import s from './Autorization.module.css'
import { NavLink } from 'react-router-dom'
import signInPhoto from '../../assets/images/SingInWithGoogle.png'

// import Outh from './../Outh/Outh';

const Autorization = (props) => {
    return (
        <header className={s.autorization}>
            
<div>Для начала нужно авторизироваться</div>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}><img src={signInPhoto} /></NavLink>}


            </div>
        </header>
    )
}

export default Autorization