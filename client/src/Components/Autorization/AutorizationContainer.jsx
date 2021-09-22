import React from 'react';
import { connect } from 'react-redux';
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
        updeteNewMessageText: (text) => {
            // dispatch(updeteNewMessageTextActionCreator(text))
        },
        addMessageText: () => {
            // dispatch(addMessageActionCreator())
        },
    }
}

const AutorizationContainer = connect(mapStateToProps, mapDispatchToProps)(Autorization)


export default AutorizationContainer