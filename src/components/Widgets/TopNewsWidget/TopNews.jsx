import React, {useState} from 'react';
import s from './TopNews.module.scss';
import news1 from "../../../assets/images/TopNewsThumbs/news-1.jpg";
import news2 from "../../../assets/images/TopNewsThumbs/news-2.jpg";
import news3 from "../../../assets/images/TopNewsThumbs/news-3.jpg";
import news4 from "../../../assets/images/TopNewsThumbs/news-4.jpg";
import news5 from "../../../assets/images/TopNewsThumbs/news-5.jpg";

const TopNews = ({state}) => {
    debugger
    return <div className={s.container}>
        <h4 className={s.widgetTitle}>{state.pageTitle}</h4>
        <div className={s.widgetBody}>
            <ul className={s.newsPageListWrapper}>
                <li className={s.listItem}>
                    <div className={s.listItemThumb}>
                        <a href="#">
                            <img src={state.news[0].img} alt="profile picture 35*35"/>
                        </a>
                    </div>
                    <div className={s.listItemInfo}>
                        <h3 className={s.itemTitle}><a href="#">{state.news[0].itemTitle}</a></h3>
                        <p className={s.itemSubtitle}><a href="#">{state.news[0].publicationTime} Min Ago</a></p>
                    </div>
                </li>
                <li className={s.listItem}>
                    <div className={s.listItemThumb}>
                        <a href="#">
                            <img src={state.news[1].img} alt="profile picture 35*35"/>
                        </a>
                    </div>
                    <div className={s.listItemInfo}>
                        <h3 className={s.itemTitle}><a href="#">{state.news[1].itemTitle}</a></h3>
                        <p className={s.itemSubtitle}><a href="#">{state.news[1].publicationTime} Min Ago</a></p>
                    </div>
                </li>
                <li className={s.listItem}>
                    <div className={s.listItemThumb}>
                        <a href="#">
                            <img src={state.news[2].img} alt="profile picture 35*35"/>
                        </a>
                    </div>
                    <div className={s.listItemInfo}>
                        <h3 className={s.itemTitle}><a href="#">{state.news[2].itemTitle}</a></h3>
                        <p className={s.itemSubtitle}><a href="#">{state.news[2].publicationTime} Min Ago</a></p>
                    </div>
                </li>
                <li className={s.listItem}>
                    <div className={s.listItemThumb}>
                        <a href="#">
                            <img src={state.news[3].img} alt="profile picture 35*35"/>
                        </a>
                    </div>
                    <div className={s.listItemInfo}>
                        <h3 className={s.itemTitle}><a href="#">{state.news[3].itemTitle}</a></h3>
                        <p className={s.itemSubtitle}><a href="#">{state.news[3].publicationTime} Min Ago</a></p>
                    </div>
                </li>
                <li className={s.listItem}>
                    <div className={s.listItemThumb}>
                        <a href="#">
                            <img src={state.news[4].img} alt="profile picture 35*35"/>
                        </a>
                    </div>
                    <div className={s.listItemInfo}>
                        <h3 className={s.itemTitle}><a href="#">{state.news[4].itemTitle}</a></h3>
                        <p className={s.itemSubtitle}><a href="#">{state.news[4].publicationTime} Min Ago</a></p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
};

export const TopNewsContainer = (props) => {
    const [state, setState] = useState({
        pageTitle: 'Latest Top News',
        news: [
            {img: news1, itemTitle: 'Hot News About Some', publicationTime: '4'},
            {img: news2, itemTitle: 'Hot News About Some', publicationTime: '15'},
            {img: news3, itemTitle: 'Hot News About Some', publicationTime: '21'},
            {img: news4, itemTitle: 'Hot News About Some', publicationTime: '39'},
            {img: news5, itemTitle: 'Hot News About Some', publicationTime: '47'},
        ],

    } );
    debugger
    return <TopNews state={state} setState={setState}/>
};
