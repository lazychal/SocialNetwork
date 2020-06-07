import React from 'react';
import s from './CardInterestingPages.module.scss';
import heart from '../../../assets/images/icons/heart.png';
import heartColor from '../../../assets/images/icons/heart-color.png';
import adventurePic from '../../../assets/images/interestPagesWidgetThumbs/Adventure-Picture.jpg';
import comedyPic from '../../../assets/images/interestPagesWidgetThumbs/Comedy-Picture.jpg';
import MMAPic from '../../../assets/images/interestPagesWidgetThumbs/MMA-Picture.jpg';
import seafoodPic from '../../../assets/images/interestPagesWidgetThumbs/Seafood-Picture.jpeg';

const CardInterestingPages = () => {
    return <div className={s.container}>
        <h4 className={s.widgetTitle}>The Page You May Like</h4>
        <div className={s.widgetBody}>
            <ul className={s.pageListWrapper}>
                <li className={s.listItem}>
                    <div className={s.listItemThumb}>
                        <a href="#">
                            <img src={adventurePic} alt="profile picture 35*35"/>
                        </a>
                    </div>
                    <div className={s.listItemInfo}>
                        <h3 className={s.itemTitle}><a href="#">Travel Around Asia</a></h3>
                        <p className={s.itemSubtitle}><a href="#">Adventure</a></p>
                    </div>
                    <button className={s.likeButton}>
                        <img className={s.heart} src={heart} alt="Heart"/>
                        <img className={s.heartColor} src={heartColor} alt="Red Heart"/>
                    </button>
                </li>
                <li className={s.listItem}>
                    <div className={s.listItemThumb}>
                        <a href="#">
                            <img src={seafoodPic} alt="profile picture 35*35"/>
                        </a>
                    </div>
                    <div className={s.listItemInfo}>
                        <h3 className={s.itemTitle}><a href="#">Foodcort Funny Octopus</a></h3>
                        <p className={s.itemSubtitle}><a href="#">Sea Food</a></p>
                    </div>
                    <button className={s.likeButton}>
                        <img className={s.heart} src={heart} alt="Heart"/>
                        <img className={s.heartColor} src={heartColor} alt="Red Heart"/>
                    </button>
                </li>
                <li className={s.listItem}>
                    <div className={s.listItemThumb}>
                        <a href="#">
                            <img src={comedyPic} alt="profile picture 35*35"/>
                        </a>
                    </div>
                    <div className={s.listItemInfo}>
                        <h3 className={s.itemTitle}><a href="#">Bob Summer</a></h3>
                        <p className={s.itemSubtitle}><a href="#">Comedy</a></p>
                    </div>
                    <button className={s.likeButton}>
                        <img className={s.heart} src={heart} alt="Heart"/>
                        <img className={s.heartColor} src={heartColor} alt="Red Heart"/>
                    </button>
                </li>
                <li className={s.listItem}>
                    <div className={s.listItemThumb}>
                        <a href="#">
                            <img src={MMAPic} alt="profile picture 35*35"/>
                        </a>
                    </div>
                    <div className={s.listItemInfo}>
                        <h3 className={s.itemTitle}><a href="#">Muscle Mind</a></h3>
                        <p className={s.itemSubtitle}><a href="#">MMA</a></p>
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

export default CardInterestingPages;