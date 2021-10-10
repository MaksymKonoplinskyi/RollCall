import React from 'react';
import Preloader from '../../common/Preloader/Preloader';


function MyGroup(props) {

    if (!props.tData) {
        return <Preloader />
    }
    return (
        <div>
            <div >
                {/* <img src='https://kpi.ua/files/images-story/n18518.jpg' className={s.mainImg} alt=""/> */}
                <div >
                    Группа в которой я учусь
                </div >

            </div>
        </div>
    )
}

export default MyGroup
