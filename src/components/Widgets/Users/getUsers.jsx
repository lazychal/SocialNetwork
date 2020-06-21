import React, {useState} from 'react';
import s from './getUsers.module.scss';

const GetUsers = () => {

    return <div className={s.container}>
        <h4 className={s.widgetTitle}>Users</h4>
        <div className={s.widgetBody}>

        </div>
    </div>
};
 export const getUsersContainer = () => {



     return <GetUsers/>
};

