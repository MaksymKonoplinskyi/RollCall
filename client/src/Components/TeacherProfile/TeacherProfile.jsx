import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import './TeacherProfile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

function TeacherProfile(props) {

    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer  />
        </div>
    )
}

export default TeacherProfile
