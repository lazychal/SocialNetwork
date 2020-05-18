import React from "react";
import {createField, Input, Textarea} from "../../common/FormControls/FormControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profile}) => {
    return <form>
        <div><button onClick={ () => {} }>Save</button></div>
        <div>
            <b>Full name</b>: { createField('Full name', 'fullName', [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: { createField('', 'lookingForAJob', [], Input, {type: 'checkbox'} ) }
        </div>

        <div>
            <b>My skills</b>:
            { createField('My skills', 'lookingForAJobDescription', [], Textarea ) }
        </div>

        <div>
            <b>About me</b>: {profile.aboutMe}
            { createField('About me', 'aboutMe', [], Textarea ) }
        </div>
        {/*<div>*/}
        {/*    /!*Object.keys деструктуризирует находящиеся в объекте объекты, в массив.*!/*/}
        {/*    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {*/}
        {/*    return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
        {/*})}*/}
        {/*</div>*/}
    </form>
};
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm