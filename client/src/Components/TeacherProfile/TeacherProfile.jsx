import React from 'react'
import './TeacherProfile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { Redirect } from 'react-router';


function TeacherProfile(props) {
    if (!props.gUser.g_id) return <Redirect to={'/auth'} />;
    return (
        <div>
            <ProfileInfo tData={props.tData} gUser={props.gUser} />

        </div>
    )
}

export default TeacherProfile
