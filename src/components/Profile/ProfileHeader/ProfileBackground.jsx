import React from 'react';

const backgroundStyle = {
    paddingTop: '59px',
    top: '8.24%',
    left: '0',
    width: '100%',
    height: '150px',
    backgroundImage: 'url(https://www.philippinetrails.com/images/luzonimages/rice-terraces-with-guest-1000x200.jpg)',
    backgroundSize: 'cover'
};

const ProfileBackground = () => {

    return <div style={backgroundStyle}>
        {/*<img src="https://www.philippinetrails.com/images/luzonimages/rice-terraces-with-guest-1000x200.jpg"*/}
        {/*     alt="Wall" style={{width: '100%'}}*/}
        {/*/>*/}
    </div>
};

export default ProfileBackground;