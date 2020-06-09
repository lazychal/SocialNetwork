import React from 'react';
import s from './TopNews.module.scss';
import news1 from "../../../assets/images/TopNewsThumbs/news-1.jpg";
import news2 from "../../../assets/images/TopNewsThumbs/news-2.jpg";
import news3 from "../../../assets/images/TopNewsThumbs/news-3.jpg";
import news4 from "../../../assets/images/TopNewsThumbs/news-4.jpg";
import news5 from "../../../assets/images/TopNewsThumbs/news-5.jpg";

const TopNews = () => {
    return <div className={s.container}>
        <h4 className={s.widgetTitle}>Latest Top News</h4>
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

export default TopNews;