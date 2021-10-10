import React from 'react';
import Preloader from '../../common/Preloader/Preloader';


function FindGroup(props) {

    if (!props.tData) {
        return <Preloader />
    }
    return (
        <div>
            <div >
                {/* <img src='https://kpi.ua/files/images-story/n18518.jpg' className={s.mainImg} alt=""/> */}
                <div >
                Найти группу
                </div >

            </div>
        </div>
    )
}

export default FindGroup
