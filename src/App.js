import React from 'react';
import s from './App.module.scss';
import {withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import CardProfile from "./components/Widgets/CardProfile/CardProfile";
import CardInterestingPages from "./components/Widgets/CardInterestingPages/CardInterestingPages";
import TopNews, {TopNewsContainer} from "./components/Widgets/TopNewsWidget/TopNews";
import NewsFeedContainer from "./components/NewsFeed/NewsFeed";
import {RecentNotificationsContainer} from "./components/AnotherWidgets/RecentNotifications/RecentNotifications";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

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
                                <div className={s.cardProfileWidgetArea}>
                                    <CardProfile/>
                                </div>
                                <div className={s.pagesWidgetArea}>
                                    {/*<NavBar/> */}
                                    <CardInterestingPages/>
                                </div>

                                <div className={s.topNewsWidgetArea}>
                                    <TopNewsContainer/>
                                </div>
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

                                </div>
                                <div className={s.subFriendsZoneArea}>

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
