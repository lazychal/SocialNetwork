import React, {useState} from 'react';
import s from './CardInterestingPages.module.scss';
import heart from '../../../assets/images/icons/heart.png';
import heartColor from '../../../assets/images/icons/heart-color.png';
import adventurePic from '../../../assets/images/interestPagesWidgetThumbs/Adventure-Picture.jpg';
import comedyPic from '../../../assets/images/interestPagesWidgetThumbs/Comedy-Picture.jpg';
import MMAPic from '../../../assets/images/interestPagesWidgetThumbs/MMA-Picture.jpg';
import seafoodPic from '../../../assets/images/interestPagesWidgetThumbs/Seafood-Picture.jpeg';

const CardInterestingPages = ({state}) => {
    return <div className={s.container}>
        <h4 className={s.widgetTitle}>{state.pageTitle}</h4>
        <div className={s.widgetBody}>
            <ul className={s.pageListWrapper}>
                <li className={s.listItem}>
                    <div className={s.listItemThumb}>
                        <a href="#">
                            <img src={state.note[0].img} alt="profile picture 35*35"/>
                        </a>
                    </div>
                    <div className={s.listItemInfo}>
                        <h3 className={s.itemTitle}><a href="#">{state.note[0].title}</a></h3>
                        <p className={s.itemSubtitle}><a href="#">{state.note[0].subTitle}</a></p>
                    </div>
                    <button className={s.likeButton}>
                        <img className={s.heart} src={heart} alt="Heart"/>
                        <img className={s.heartColor} src={heartColor} alt="Red Heart"/>
                    </button>
                </li>
                <li className={s.listItem}>
                    <div className={s.listItemThumb}>
                        <a href="#">
                            <img src={state.note[1].img} alt="profile picture 35*35"/>
                        </a>
                    </div>
                    <div className={s.listItemInfo}>
                        <h3 className={s.itemTitle}><a href="#">{state.note[1].title}</a></h3>
                        <p className={s.itemSubtitle}><a href="#">{state.note[1].subTitle}</a></p>
                    </div>
                    <button className={s.likeButton}>
                        <img className={s.heart} src={heart} alt="Heart"/>
                        <img className={s.heartColor} src={heartColor} alt="Red Heart"/>
                    </button>
                </li>
                <li className={s.listItem}>
                    <div className={s.listItemThumb}>
                        <a href="#">
                            <img src={state.note[2].img} alt="profile picture 35*35"/>
                        </a>
                    </div>
                    <div className={s.listItemInfo}>
                        <h3 className={s.itemTitle}><a href="#">{state.note[2].title}</a></h3>
                        <p className={s.itemSubtitle}><a href="#">{state.note[2].subTitle}</a></p>
                    </div>
                    <button className={s.likeButton}>
                        <img className={s.heart} src={heart} alt="Heart"/>
                        <img className={s.heartColor} src={heartColor} alt="Red Heart"/>
                    </button>
                </li>
                <li className={s.listItem}>
                    <div className={s.listItemThumb}>
                        <a href="#">
                            <img src={state.note[3].img} alt="profile picture 35*35"/>
                        </a>
                    </div>
                    <div className={s.listItemInfo}>
                        <h3 className={s.itemTitle}><a href="#">{state.note[3].title}</a></h3>
                        <p className={s.itemSubtitle}><a href="#">{state.note[3].subTitle}</a></p>
                    </div>
                    <button className={s.likeButton}>
                        <img className={s.heart} src={heart} alt="Heart"/>
                        <img className={s.heartColor} src={heartColor} alt="Red Heart"/>
                    </button>
                </li>
            </ul>
        </div>
    </div>
};

export const CardInterestingPagesContainer = (props) => {
    const [state, setState] = useState({
        pageTitle: 'The Page You May Like',
        note: [
            {img: adventurePic, title: 'Travel Around Asia', subTitle: 'Adventure'},
            {img: seafoodPic, title: 'Food-court Funny Octopus', subTitle: 'Sea Food'},
            {img: comedyPic, title: 'Bob Summer', subTitle: 'Comedy'},
            {img: MMAPic, title: 'Muscle Mind', subTitle: 'MMA'},
        ],

        isYouLikeIt: false

    } );

    return <CardInterestingPages state={state} setState={setState}/>
};
//
export default CardInterestingPages;