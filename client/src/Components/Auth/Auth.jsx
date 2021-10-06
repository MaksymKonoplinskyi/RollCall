import React from 'react';
import { NavLink } from 'react-router-dom';

import OuthContainer from '../Outh/OuthContainer';



const Auth = (props) => {
  
    return (
        <div>
            {!props.g_id && <div >
                <p> Для начала нужно авторизироваться через googl</p>
                <OuthContainer />
            </div>}

            {!!props.g_id && <div >
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


            </div >}



            <div>

            </div>
        </div>
    )
}

export default Auth

