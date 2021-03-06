import { connect } from 'react-redux';
import { setUserGData } from '../../redux/google-auth-reduser';
import Auth from './Auth';

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

const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth)


export default AuthContainer