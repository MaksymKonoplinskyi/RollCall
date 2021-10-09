import { connect } from 'react-redux';
import { setUserData, setUserGData } from '../../redux/google-auth-reduser';
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
        setUserGData: (g_id, email, g_name, avaUrl, id_token) => {
            dispatch(setUserGData(g_id, email, g_name, avaUrl, id_token))
        },
        setUserData: (userData) => {
            dispatch(setUserData(userData))

        }

    }
}

const OuthContainer = connect(mapStateToProps, mapDispatchToProps)(Outh)


export default OuthContainer