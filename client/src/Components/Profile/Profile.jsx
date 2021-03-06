import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile(props) {

    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer  />
        </div>
    )
}

export default Profile
