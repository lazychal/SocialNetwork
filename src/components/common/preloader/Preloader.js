import React from "react";
import preloader from "../../../assets/images/loading.gif";
import styles from "../../Users/users.module.css";

let Preloader = (props) => {
    return <img src={preloader} className={styles.preloader}/>
};

export default Preloader;