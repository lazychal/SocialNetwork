import React from "react";
import s from "../users.module.scss";

let UserName = ({user}) => {

    return <h3 className={s.itemTitle}><a href="#">{user.name}</a></h3>
};


export default UserName;