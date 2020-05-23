import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from '../common/FormControls/FormControls.module.css'

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', Input, [required])}
            {createField('Password', 'password', Input, [required], {type: 'password'})}
            {createField(null, 'rememberMe', Input, [], {type: 'checkbox'}, 'Remember me')}

            { captchaUrl && <img src={captchaUrl} alt="captcha"/> }
            { captchaUrl && createField('Enter the symbols', 'captcha', Input, [required], {} ) }

                {error && <div className={s.formSummaryError}>{error}</div>}
                <div><button>Go</button></div>

        </form>
    )

};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
};
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, {login})(Login);