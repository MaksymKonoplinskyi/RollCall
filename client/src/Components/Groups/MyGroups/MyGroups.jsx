import React from 'react';
import Preloader from '../../common/Preloader/Preloader';


function MyGroups(props) {

    if (!props.tData) {
        return <Preloader />
    }
    return (
        <div>
            <div >
                {/* <img src='https://kpi.ua/files/images-story/n18518.jpg' className={s.mainImg} alt=""/> */}
                <div >
                    Группы в которых я рпеподаю
                </div >

            </div>
        </div>
    )
}

export default MyGroups
