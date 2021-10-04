import React from 'react';
import s from './Header.module.css'
import OuthContainer from '../Outh/OuthContainer';


// import Outh from './../Outh/Outh';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://kpi.ua/files/kpi_0.png' alt='' />
            <div className={s.loginBlock}>
                <OuthContainer />

            </div>
        </header>
    )
}

export default Header