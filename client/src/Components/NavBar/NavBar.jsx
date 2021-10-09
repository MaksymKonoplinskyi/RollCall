import React from 'react'
import s from './NavBar.module.css'
import { NavLink } from 'react-router-dom'


function NavBar() {
    return (
        <nav className={s.nav}>
            <div className={s.item + ' ' + s.active}>
                <NavLink to="/auth" activeClassName={s.active}>Auth</NavLink>
            </div>
            <div className={s.item + ' ' + s.active}>
                <NavLink to="/teacher" activeClassName={s.active}>Teacher Profile</NavLink>
            </div>
            <div className={s.item + ' ' + s.active}>
                <NavLink to="/Profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item + ' ' + s.active}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item + ' ' + s.active}>
                <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
            </div>

        </nav>
    )
}
export default NavBar
