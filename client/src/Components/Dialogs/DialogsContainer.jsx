import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updeteNewMessageTextActionCreator } from '../../redux/dialogsReduser';
import Dialogs from './Dialogs';



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
            dispatch(updeteNewMessageTextActionCreator(text))
        },
        addMessageText: () => {
            dispatch(addMessageActionCreator())
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer

