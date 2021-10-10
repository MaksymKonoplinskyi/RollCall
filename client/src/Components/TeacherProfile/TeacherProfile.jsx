import React from 'react'
import './TeacherProfile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'


function TeacherProfile(props) {

    return (
        <div>
            <ProfileInfo tData={props.tData} gUser={props.gUser}/>
                        
        </div>
    )
}

export default TeacherProfile
