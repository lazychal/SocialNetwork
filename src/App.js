import React from 'react';
import s from './App.module.scss';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import CardProfile from "./components/Widgets/CardProfile/CardProfile";
import CardInterestingPages from "./components/Widgets/CardInterestingPages/CardInterestingPages";
import TopNews from "./components/Widgets/TopNewsWidget/TopNews";
import NewsFeedContainer from "./components/NewsFeed/NewsFeed";

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
                                    <TopNews/>
                                </div>
                            </div>

                            <div className={s.newsFeedArea}>

                                <NewsFeedContainer/>

                                {/*<NewsFeed/>*/}

                                {/*            <Switch>*/}
                                {/*                <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>*/}
                                {/*                <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>*/}
                                {/*                /!*В строке ниже мы присваеваем URL доп. параметр, который будет считывать ID юзера.*/}
                                {/*Далее, в контейнерной компоненте, мы зоздаём переменную, с таким же названием(необязательно),*/}
                                {/*и присваиваем ей значение, приходящее в пропсы(смотрим в консоли): props.match.params.userId*/}
                                {/*И, наконец, в componentDidMount, в ajax-запросе плюсуем к URL нашу переменную*/}
                                {/*userId(или как мы там её назвали). Теперь страница будет отслеживать ID, и отрисовывать профили*/}
                                {/*любых, нужных нам пользователей.*!/*/}
                                {/*                <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>*/}
                                {/*                <Route path='/users' render={() => <UsersContainer/>}/>*/}
                                {/*                <Route path='/news' render={() => <News/>}/>*/}
                                {/*                <Route path='/music' render={() => <Music/>}/>*/}
                                {/*                <Route path='/settings' render={() => <Settings/>}/>*/}
                                {/*                <Route path='/login' render={() => <Login/>}/>*/}
                                {/*                <Route path='*' render={() => <div>404 Not Found</div>}/>*/}
                                {/*            </Switch>*/}
                            </div>

                            <div className={s.infoArea}>
                                {/*При заполнении, убрать эту дивку, и положить сюда компонент
                                или компоненты в дивках*/}
                                <div className={s.contentAreaC}></div>
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
