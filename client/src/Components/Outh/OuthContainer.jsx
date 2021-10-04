import { connect } from 'react-redux';
import { setUserGData } from '../../redux/google-auth-reduser';
import Outh from './Outh';

const mapStateToProps = (state) => {
        return {
        gUser: state.auth,
        // dialogs: state.dialogsPage.dialogs,
        // messages: state.dialogsPage.messages,
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserGData: (id, email, g_name, avaUrl, id_token) => {
         dispatch(setUserGData(id, email, g_name, avaUrl, id_token))
        },
        
    }
}

const OuthContainer = connect(mapStateToProps, mapDispatchToProps)(Outh)


export default OuthContainer