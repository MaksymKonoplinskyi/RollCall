import { connect } from 'react-redux';
import { setUserData } from '../../redux/google-auth-reduser';
import RegTeacher from './RegTeacher';

const mapStateToProps = (state) => {
    return {
        g_id: state.auth.g_id,
        g_name: state.auth.g_name,
        email: state.auth.email,
        id_token: state.auth.id_token
        // messages: state.dialogsPage.messages,

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

const RegTeacherContainer = connect(mapStateToProps, mapDispatchToProps)(RegTeacher)


export default RegTeacherContainer