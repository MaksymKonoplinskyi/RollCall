import { connect } from 'react-redux';
import { setUserGData } from '../../redux/google-auth-reduser';
import Registration from './Registration';

const mapStateToProps = (state) => {
        return {
        g_id: state.auth.gUser.g_id,
        g_name: state.auth.gUser.g_name,
        // token: state.auth.token
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

const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration)


export default RegistrationContainer