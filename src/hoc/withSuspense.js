import React, {Component} from "react";
import Preloader from "../components/common/preloader/Preloader";

// Hoc для обертки компонентов React.Suspense

export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>
    };
};