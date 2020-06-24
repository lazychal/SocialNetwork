import React from "react";
import preloader from "../../../assets/images/loading.gif";

const style = { width: '150px', position: 'absolute', left: '46%', top: '40%', zIndex: '100' };

const Preloader = () => {
    return <img src={preloader}
                style={style}
                alt='Preloader'/>
};

export default Preloader;