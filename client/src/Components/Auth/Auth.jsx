import React from 'react';
import OuthContainer from '../Outh/OuthContainer';



const Auth = (props) => {
  
    return (
        <div>
            {!props.g_id && <div >
                <p> Для начала нужно авторизироваться через googl</p>
                <OuthContainer />
            </div>}

            {!!props.g_id && <div >
                <p> Ви авторизовані як {props.g_name}.</p>
                <p> Якщо хочете вийти натисніть:</p>
                <OuthContainer />
            </div>}



            <div>

            </div>
        </div>
    )
}

export default Auth

