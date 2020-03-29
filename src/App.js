import React from 'react';
import './App.css';
import NavBar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>

                    {/*В строке ниже мы присваеваем URL доп. параметр, который будет считывать ID юзера.
                    Далее, в контейнерной компоненте, мы зоздаём переменную, с таким же названием(необязательно),
                    и присваиваем ей значение, приходящее в пропсы(смотрим в консоли): props.match.params.userId
                    И, наконец, в componentDidMount, в ajax-запросе плюсуем к URL нашу переменную
                    userId(или как мы там её назвали). Теперь страница будет отслеживать ID, и отрисовывать профили
                    любых, нужных нам пользователей.*/}
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>

                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
