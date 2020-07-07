import React from 'react';
import s from './Profile.module.scss';
import appStyles from '../../App.module.scss';
import HeaderContainer from "../Header/HeaderContainer";
import {CardInterestingPagesContainer} from "../Widgets/CardInterestingPages/CardInterestingPages";
import NewsFeedContainer from "../NewsFeed/NewsFeed";
import {RecentNotificationsContainer} from "../AnotherWidgets/RecentNotifications/RecentNotificationsContainer";
import Advertisement from "../AnotherWidgets/Advertisement/Advertisement";
import FriendsZoneContainer from "../AnotherWidgets/FriendsZone/FriendsZone";
import ProfileBackground from "./ProfileHeader/ProfileBackground";
import ProfileMenu from "./ProfileHeader/ProfileMenu";
import {UserPhotoCardContainer} from "./Widgets/UserPhotoCard";

const Profile = ({profile, userId}) => {
    return <div className={appStyles.appWrapper}>

        <div className={appStyles.appHeader}>
            <HeaderContainer />
        </div>

        <div className={appStyles.content}>
            <div className={appStyles.container}>
                <div className={s.profileHeader}>
                    <ProfileBackground/>
                    <ProfileMenu/>
                </div>
                <div className={s.appBody}>

                    <div className={s.widgetArea}>

                        <div className={s.subUserPhotoCardWidgetArea}>
                            <UserPhotoCardContainer userId={userId}/>
                        </div>
                        <div className={s.subProfileInfoCardWidgetArea}>
                            {/*<ProfileInfoCard/>*/}
                        </div>
                        <div className={s.subMemoriesCardWidgetArea}>
                            {/*<ProfileMemories/>*/}
                        </div>
                        <div className={appStyles.subPagesWidgetArea}>
                            <CardInterestingPagesContainer/>
                        </div>

                    </div>

                    <div className={appStyles.newsFeedArea}>
                        <NewsFeedContainer/>
                    </div>

                    <div className={appStyles.infoArea}>

                        <div className={appStyles.subNotificationArea}>
                            <RecentNotificationsContainer/>
                        </div>
                        <div className={appStyles.subAdvertiseArea}>
                            <Advertisement/>
                        </div>
                        <div className={appStyles.subFriendsZoneArea}>
                            <FriendsZoneContainer/>
                        </div>

                    </div>
                </div>

            </div>
        </div>

        <div className={s.footer}></div>

    </div>
};
export default Profile;









