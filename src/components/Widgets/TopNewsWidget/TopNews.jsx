import React, {useState} from 'react';
import s from './TopNews.module.scss';
import news1 from "../../../assets/images/TopNewsThumbs/news-1.jpg";
import news2 from "../../../assets/images/TopNewsThumbs/news-2.jpg";
import news3 from "../../../assets/images/TopNewsThumbs/news-3.jpg";
import news4 from "../../../assets/images/TopNewsThumbs/news-4.jpg";
import news5 from "../../../assets/images/TopNewsThumbs/news-5.jpg";

const TopNews = (props) => {
    debugger
    return <div className={s.container}>
        <h4 className={s.widgetTitle}>{props.state.pageTitle}</h4>
        <div className={s.widgetBody}>
            <ul className={s.newsPageListWrapper}>
                <li className={s.listItem}>
                    <div className={s.listItemThumb}>
                        <a href="#">
                            <img src={news1} alt="profile picture 35*35"/>
                        </a>
                    </div>
                    <div className={s.listItemInfo}>
                        <h3 className={s.itemTitle}><a href="#">Hot News About Some</a></h3>
                        <p className={s.itemSubtitle}><a href="#">4 Min Ago</a></p>
                    </div>
                </li>
                <li className={s.listItem}>
                    <div className={s.listItemThumb}>
                        <a href="#">
                            <img src={news2} alt="profile picture 35*35"/>
                        </a>
                    </div>
                    <div className={s.listItemInfo}>
                        <h3 className={s.itemTitle}><a href="#">Hot News About Some</a></h3>
                        <p className={s.itemSubtitle}><a href="#">15 Min Ago</a></p>
                    </div>
                </li>
                <li className={s.listItem}>
                    <div className={s.listItemThumb}>
                        <a href="#">
                            <img src={news3} alt="profile picture 35*35"/>
                        </a>
                    </div>
                    <div className={s.listItemInfo}>
                        <h3 className={s.itemTitle}><a href="#">Hot News About Some</a></h3>
                        <p className={s.itemSubtitle}><a href="#">21 Min Ago</a></p>
                    </div>
                </li>
                <li className={s.listItem}>
                    <div className={s.listItemThumb}>
                        <a href="#">
                            <img src={news4} alt="profile picture 35*35"/>
                        </a>
                    </div>
                    <div className={s.listItemInfo}>
                        <h3 className={s.itemTitle}><a href="#">Hot News About Some</a></h3>
                        <p className={s.itemSubtitle}><a href="#">39 Min Ago</a></p>
                    </div>
                </li>
                <li className={s.listItem}>
                    <div className={s.listItemThumb}>
                        <a href="#">
                            <img src={news5} alt="profile picture 35*35"/>
                        </a>
                    </div>
                    <div className={s.listItemInfo}>
                        <h3 className={s.itemTitle}><a href="#">Hot News About Some</a></h3>
                        <p className={s.itemSubtitle}><a href="#">47 Min Ago</a></p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
};

export const TopNewsContainer = (props) => {
    const [state, setState] = useState({
        pageTitle: 'Latest Top News',
        news: {
            1: {img: news1, itemTitle: 'Hot News About Some', publicationTime: '4'},
            2: {img: news2, itemTitle: 'Hot News About Some', publicationTime: '15'},
            3: {img: news3, itemTitle: 'Hot News About Some', publicationTime: '21'},
            4: {img: news4, itemTitle: 'Hot News About Some', publicationTime: '39'},
            5: {img: news5, itemTitle: 'Hot News About Some', publicationTime: '47'},
        },

    } );
    debugger
    return <TopNews state={state} setState={setState}/>
};
