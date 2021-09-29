import { connect } from 'react-redux';
import { setUserGData } from '../../redux/google-auth-reduser';
import RegStudent from './RegStudent';

const mapStateToProps = (state) => {
        return {
        id: state.auth.id,
        g_name: state.auth.g_name
        // dialogs: state.dialogsPage.dialogs,
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

const RegStudentContainer = connect(mapStateToProps, mapDispatchToProps)(RegStudent)


export default RegStudentContainer