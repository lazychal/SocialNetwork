import React from 'react';
import s from './Ava_desc.module.css'
import Preloader from "../../common/preloader/Preloader";

const Ava_desc = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div className={s.Ava_desc}>
            <img src={props.profile.photos.large} />
            {/*ava + description*/}
            <div className='full_name'>Full Name: {props.profile.fullName}</div>
            <div className='about_me'>About Me: {props.profile.aboutMe}</div>
            <div className='contacts'>Contacts: {props.profile.contacts.facebook}</div>
            <div className='looking-for-a-job-description'>Looking for a job. Description: {props.profile.lookingForAJobDescription}</div>
        </div>
    )
}

export default Ava_desc;