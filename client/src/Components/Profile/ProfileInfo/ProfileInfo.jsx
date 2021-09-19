import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

function ProfileInfo(props) {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className='content'>
                <img src='https://kpi.ua/files/images-story/n18518.jpg' className={s.mainImg} />
                <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large} />
                </div >

            </div>
        </div>
    )
}

export default ProfileInfo
