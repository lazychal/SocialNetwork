import React, {useEffect} from 'react';
import s from './CardProfile.module.scss'
import {compose} from "redux";
import {connect, useDispatch, useSelector} from "react-redux";
import {NavLink, withRouter} from "react-router-dom";
import {getStatus} from "../../../redux/profile-reducer";

const CardProfile = ({fullName, status, userPic}) => {

    return <div className={s.container}>
        <div className={s.profileWidget}>
            <NavLink to='/profile'>
                <img src="https://www.easyvoyage.com/images/attractions/3751/960x384/2583.jpg"
                     alt="Profile Banner"
                     className={s.profileBannerSmall}
                />
                <img src={userPic}
                     alt="UserData Picture"
                     className={s.userPic}
                />
            </NavLink>
        </div>
        <div className={s.profileDesc}>
            <h6 className={s.fullNameTitle}> <NavLink to='/profile'> {fullName} </NavLink> </h6>
            <p className={s.userStatus}>{status}</p>
        </div>
    </div>
};


const CardProfileContainer = (props) => {
    // Как получить статус пользователя, для использования в этом компоненте:
    // Достаём userId из state
    const {userId} = useSelector((state) => state.auth);
    // Диспатчим санку
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStatus(userId))
    }, []);
    // Готово!

    return <CardProfile fullName={props.fullName} status={props.status} userPic={props.userPic}/>
};

let mapStateToProps = (state) => {

    return {
        fullName: state.profilePage.profile.fullName,
        status: state.profilePage.status,
        userPic: state.profilePage.profile.photos.small
    }
};

export default compose(
    connect(mapStateToProps, {}),
    withRouter,
)(CardProfileContainer);