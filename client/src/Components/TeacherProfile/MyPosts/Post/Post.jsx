import React from 'react'
import s from './Post.module.css'

function Post(props) {
    return (
        <div className={s.item}>
            <img src='https://klike.net/uploads/posts/2019-03/1551514006_1.jpg'  alt=""/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post
