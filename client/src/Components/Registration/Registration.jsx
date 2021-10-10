import React from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';


const Registration = (props) => {

    if (!props.g_id) return <Redirect to={'/auth'} />;

    return (
        <div>


            <div >
                <p>Здравствуйте  {props.g_name}</p>
                <p>Вы пока не зарегистрированы в системе.</p>
                <p>Чтобы продолжить Вам нужно</p>
                <div >
                    <NavLink to="/regStudent" >Зарегистрироваться как студент</NavLink>
                </div>
                <p>или</p>
                <div >
                    <NavLink to="/regTeacher" >Зарегистрироваться как преподаватель</NavLink>
                </div>


            </div >



            <div>

            </div>
        </div>
    )
}

export default Registration

