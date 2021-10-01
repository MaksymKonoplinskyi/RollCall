import MyPosts from './MyPosts'
import { addPostActionCreator, updeteNewPostTextActionCreator } from '../../../redux/profileReduser';
import { connect } from 'react-redux';




const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updeteNewPostText: (text) => {
            let action = updeteNewPostTextActionCreator(text)
            dispatch(action);
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
