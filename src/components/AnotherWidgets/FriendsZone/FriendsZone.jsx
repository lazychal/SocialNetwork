import React, {useState} from 'react';
import adventurePic from '../../../assets/images/interestPagesWidgetThumbs/Adventure-Picture.jpg';
import comedyPic from '../../../assets/images/interestPagesWidgetThumbs/Comedy-Picture.jpg';
import MMAPic from '../../../assets/images/interestPagesWidgetThumbs/MMA-Picture.jpg';
import seafoodPic from '../../../assets/images/interestPagesWidgetThumbs/Seafood-Picture.jpeg';
import CardInterestingPages from "../../Widgets/CardInterestingPages/CardInterestingPages";
import {connect} from "react-redux";

const FriendsZoneContainer = ({userPic}) => {

    const myPic = userPic;
    const [state, setState] = useState({
        pageTitle: 'The Page You May Like',
        note: [
            {img: adventurePic, title: 'Travel Around Asia', subTitle: 'Adventure'},
            {img: myPic, title: 'Food-court Funny Octopus', subTitle: 'Sea Food'},
            {img: comedyPic, title: 'Bob Summer', subTitle: 'Comedy'},
            {img: MMAPic, title: 'Muscle Mind', subTitle: 'MMA'},
        ],

        isYouLikeIt: false

    } );

    return <CardInterestingPages state={state} setState={setState}/>
};

let mapStateToProps = (state) => {

    return {
        userPic: state.profilePage.profile.photos.small
    }
};

export default connect(mapStateToProps, {})(FriendsZoneContainer);

// export default CardInterestingPages;