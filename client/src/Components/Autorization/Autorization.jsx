import React from 'react';
import s from './Autorization.module.css'
import { NavLink } from 'react-router-dom'
import signInPhoto from '../../assets/images/SingInWithGoogle.png'
import { authMy } from '../../api/api';
import axios from 'axios';

// import Outh from './../Outh/Outh';

const Autorization = (props) => {
    let onAuthClick = (req, res) => {
        return axios.get('http://localhost:5000/google', {
            // withCredentials: true
        })
            .then((req, res) => { console.log(res); })
    }
    let onTestClick = (req, res) => {
        return axios.get('http://localhost:5000/', {
            // withCredentials: true
        })
            .then((req, res) => { console.log(res); })
    }
    let onTesttClick = (req, res) => {
        return axios.get('http://localhost:5000/api/student/auth', {
            // withCredentials: true
        })
            .then((req, res) => { console.log(res); })
    }
    return (
        <header className={s.autorization}>

            <div className={s.text}>Для начала нужно авторизироваться</div>

            <div className={s.loginBlock}>
                <a href="http://localhost:5000/google">google auth</a>
                <div>
                    <button onClick={onAuthClick}>knopca</button>
                </div>
                <div>
                    <button onClick={onTestClick}>TEST</button> 
                </div>
                <div>
                    <button onClick={onTesttClick}>TEST2</button>
                </div>
            </div>status auth `Welcome mr !` <div>
            </div>

        </header >
    )
}

export default Autorization

{/* {props.isAuth ? props.login : <img onClick={onAuthClick ()} src={signInPhoto} /> */ }
// http://localhost:5000/api/student/auth
// getUsers = (currentPage = 2, pageSize = 10) => {
//     return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
//         withCredentials: true
//     })
//     .then (response => response.data)
// }