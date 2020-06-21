import React from 'react';
import s from './Advertisement.module.scss';
import Advertise from '../../../assets/images/Advertise.jpg';

const Advertisement = () => {

    return <div className={s.container}>
        <h4 className={s.widgetTitle}>Advertisement</h4>
        <div className={s.widgetBody}>
            {/*<img src={Advertise} alt="Travel Poster"/>*/}
        </div>
    </div>
};
export default Advertisement;
