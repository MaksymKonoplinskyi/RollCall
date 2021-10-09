import React from 'react'
import Post from './Post/Post'
import s from './MyPost.module.css'





function MyPost(props) {
    let postsElements =
        props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updeteNewPostText(text);
    }

    return (
        <div>
            My posts
            <div className={s.postsBlock}>
                <div>
                    <textarea onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}

            </div>
        </div>
    )
}

export default MyPost
