import { connect } from 'react-redux';
// import { setUserData } from '../../redux/google-auth-reduser';
import TeacherProfile from './TeacherProfile';



import { setUserData } from '../../redux/google-auth-reduser';


const mapStateToProps = (state) => {
    return {
        gUser: state.auth.gUser,
        tData: state.auth.tData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserData: () => {
            dispatch(setUserData())
            //  setUserData: () => {
            //     dispatch(setUserData())
        },

    }
}

const TeacherProfileContainer = connect(mapStateToProps, mapDispatchToProps)(TeacherProfile)


export default TeacherProfileContainer