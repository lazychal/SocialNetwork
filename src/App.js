import React from 'react';
import s from './App.module.scss';
import {withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import CardProfile from "./components/Widgets/CardProfile/CardProfile";
import {CardInterestingPagesContainer} from "./components/Widgets/CardInterestingPages/CardInterestingPages";
import {TopNewsContainer} from "./components/Widgets/TopNewsWidget/TopNews";
import NewsFeedContainer from "./components/NewsFeed/NewsFeed";
import {RecentNotificationsContainer} from "./components/AnotherWidgets/RecentNotifications/RecentNotificationsContainer";
import Advertisement from "./components/AnotherWidgets/Advertisement/Advertisement";
import FriendsZoneContainer from "./components/AnotherWidgets/FriendsZone/FriendsZone";
import GetUsersContainer from "./ZIP/Users/GetUsers";

// const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
// const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends React.Component {
    catchAllUnhandledErrors = (reason, promise) => {
        alert('Something is Bad...');
        // console.error(promise)
    };

    componentDidMount() {
        this.props.initializeApp();

        //Отлавливаем промисы reject(ошибки)
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        // Подчищаем "мусор" за addEventListener
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (

            <div className={s.appWrapper}>

                <div className={s.appHeader}>
                    <HeaderContainer/>
                </div>
                <div className={s.content}>
                    <div className={s.container}>
                        <div className={s.appBody}>

                            <div className={s.widgetArea}>
                                <div className={s.SubCardProfileWidgetArea}>
                                    <CardProfile/>
                                </div>
                                <div className={s.SubPagesWidgetArea}>
                                    {/*<NavBar/> */}
                                    <CardInterestingPagesContainer/>
                                </div>

                                <div className={s.SubTopNewsWidgetArea}>
                                    <TopNewsContainer/>
                                </div>
                                {/*<div className={s.SubGetUsersWidgetArea}>*/}
                                {/*    <GetUsersContainer/>*/}
                                {/*</div>*/}
                            </div>

                            <div className={s.newsFeedArea}>

                                <NewsFeedContainer/>

                                {/*<NewsFeed/>*/}

                            </div>

                            <div className={s.infoArea}>
                                {/*При заполнении, убрать эту дивку, и положить сюда компонент
                                или компоненты в дивках*/}
                                <div className={s.subNotificationArea}>
                                    <RecentNotificationsContainer />
                                </div>
                                <div className={s.subAdvertiseArea}>
                                    <Advertisement/>
                                </div>
                                <div className={s.subFriendsZoneArea}>
                                    <FriendsZoneContainer/>
                                </div>

                            </div>

                        </div>

                        <div className={s.appFooter}>

                        </div>
                    </div>
                </div>


            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
