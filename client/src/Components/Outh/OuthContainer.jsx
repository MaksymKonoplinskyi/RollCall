import { connect } from 'react-redux';
import { setUserData, setUserGData } from '../../redux/google-auth-reduser';
import Outh from './Outh';

const mapStateToProps = (state) => {
    return {
        gUser: state.auth.gUser,
        // dialogs: state.dialogsPage.dialogs,
        // messages: state.dialogsPage.messages,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserGData: (gUser) => {
            dispatch(setUserGData(gUser))
        },
        setUserData: (userData) => {
            dispatch(setUserData(userData))

        }

    }
}

const OuthContainer = connect(mapStateToProps, mapDispatchToProps)(Outh)


export default OuthContainer