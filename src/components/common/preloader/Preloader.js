import React from "react";
import preloader from "../../../assets/images/loading.gif";
import styles from "../../Users/users.module.scss";

let Preloader = (props) => {
    return <img src={preloader} className={styles.preloader} alt='Preloader'/>
};

export default Preloader;