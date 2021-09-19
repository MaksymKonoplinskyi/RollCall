import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';





function Dialogs(props) {

    let onAddMessage = () => {
        props.addMessageText()
        
    }

    let dialogsElements = props.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = props.messages
        .map(m => <Message message={m.message} id={m.id} />);

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updeteNewMessageText(text)
         }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}

                <div>
                    <textarea onChange={onMessageChange}
                        value={props.newMessageText}
                    />
                </div>
                <div>
                    <button onClick={onAddMessage}>Add message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs
// addMessage={props.addMessage}
//             updateNewMessageText={props.updateNewMessageText}