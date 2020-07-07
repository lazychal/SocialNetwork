import React from "react";
import preloader from "../../../assets/images/loading.gif";



const Preloader = ({style}) => {
    return <img src={preloader}
                style={style}
                alt='Preloader'/>
};

export default Preloader;