import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserDataActionCreator } from '../../redux/auth-reduser';
import Autorization from './Autorization';

const mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAuthUserData: () => {
         dispatch(setAuthUserDataActionCreator())
        },
        
    }
}

const AutorizationContainer = connect(mapStateToProps, mapDispatchToProps)(Autorization)


export default AutorizationContainer