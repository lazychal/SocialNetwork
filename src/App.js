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
import {Routes} from "./components/common/Routes/Routes";

// const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
// const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends React.Component {
    catchAllUnhandledErrors = (reason, promise) => {
        // alert('Something is Bad...');
        console.error(promise + 'Something is Bad...')
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
    style = { width: '150px', position: 'absolute', left: '46%', top: '40%', zIndex: '100' };
    render() {
        if (!this.props.initialized) { return <Preloader style={this.style}/> }
        return (

            <div className={s.appWrapper}>
                <Routes/>
                <div className={s.appHeader}>
                    <HeaderContainer />
                </div>
                <div className={s.content}>
                    <div className={s.container}>
                        <div className={s.appBody}>
                            <div className={s.widgetArea}>
                                <div className={s.SubCardProfileWidgetArea}>
                                    <CardProfile/>
                                </div>
                                <div className={s.subPagesWidgetArea}>
                                    <CardInterestingPagesContainer/>
                                </div>

                                <div className={s.SubTopNewsWidgetArea}>
                                    <TopNewsContainer/>
                                </div>
                            </div>

                            <div className={s.newsFeedArea}>
                                <NewsFeedContainer/>
                            </div>

                            <div className={s.infoArea}>

                                <div className={s.subNotificationArea}>
                                    <RecentNotificationsContainer/>
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
