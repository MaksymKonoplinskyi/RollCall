import React from 'react';
import s from './Autorization.module.css'
import { NavLink } from 'react-router-dom'
import signInPhoto from '../../assets/images/SingInWithGoogle.png'
import { authMy } from '../../api/api';
import axios from 'axios';
import OuthContainer from '../Outh/OuthContainer';

// import Outh from './../Outh/Outh';

const Autorization = (props) => {
    debugger
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
    let onTesttClick = (googleUser) => {
        const profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());
    }

    // function onSignIn(googleUser) {
    //     // Useful data for your client-side scripts:
    //     const profile = googleUser.getBasicProfile();
    //     console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    //     console.log('Full Name: ' + profile.getName());
    //     console.log('Given Name: ' + profile.getGivenName());
    //     console.log('Family Name: ' + profile.getFamilyName());
    //     console.log("Image URL: " + profile.getImageUrl());
    //     console.log("Email: " + profile.getEmail());

    //     // The ID token you need to pass to your backend:
    //     var id_token = googleUser.getAuthResponse().id_token;
    //     console.log("ID Token: " + id_token);
    // }

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
                <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
            </div>
            <OuthContainer />
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