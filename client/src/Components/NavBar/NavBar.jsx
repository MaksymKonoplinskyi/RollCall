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
                <NavLink to="/Profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item + ' ' + s.active}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item + ' ' + s.active}>
                <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.item + ' ' + s.active}>
                <NavLink to="/News" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item + ' ' + s.active}>
                <NavLink to="/autorization" activeClassName={s.active}>autorization</NavLink>
            </div>
            <div className={s.item + ' ' + s.active}>
                <NavLink to="/Settings" activeClassName={s.active}>Settings</NavLink>
            </div>
        </nav>
    )
}
export default NavBar
