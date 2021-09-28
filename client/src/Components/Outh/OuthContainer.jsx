import React from 'react';
import { connect } from 'react-redux';
import { setUserGData } from '../../redux/google-auth-reduser';
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
        setAuthUserData: () => {
         dispatch(setUserGData())
        },
        
    }
}

const OuthContainer = connect(mapStateToProps, mapDispatchToProps)(Outh)


export default OuthContainer