import { connect } from 'react-redux';
import { setUserGData } from '../../redux/google-auth-reduser';
import RegTeacher from './RegTeacher';

const mapStateToProps = (state) => {
        return {
        id: state.auth.id,
        g_name: state.auth.g_name,
        email: state.auth.email
        // messages: state.dialogsPage.messages,
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAuthUserData: () => {
         dispatch(setUserGData())
        },
        
    }
}

const RegTeacherContainer = connect(mapStateToProps, mapDispatchToProps)(RegTeacher)


export default RegTeacherContainer