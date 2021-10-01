import { connect } from 'react-redux';
import { setUserGData } from '../../redux/google-auth-reduser';
import Autorization from './Autorization';

const mapStateToProps = (state) => {
    
    return {
        gUser: state.auth.gUser,
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

const AutorizationContainer = connect(mapStateToProps, mapDispatchToProps)(Autorization)


export default AutorizationContainer