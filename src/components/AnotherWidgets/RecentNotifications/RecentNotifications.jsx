import React, {useState} from 'react';
import news1 from "../../../assets/images/TopNewsThumbs/news-1.jpg";
import news2 from "../../../assets/images/TopNewsThumbs/news-2.jpg";
import news3 from "../../../assets/images/TopNewsThumbs/news-3.jpg";
import news4 from "../../../assets/images/TopNewsThumbs/news-4.jpg";
import news5 from "../../../assets/images/TopNewsThumbs/news-5.jpg";
import TopNews from '../../Widgets/TopNewsWidget/TopNews.jsx';


export const RecentNotificationsContainer = (props) => {
    const [state, setState] = useState({
        pageTitle: 'Recent Notifications',
        note: [
            {img: news1, itemTitle: 'Any one can join with us if you want', publicationTime: '5'},
            {img: news2, itemTitle: 'Any one can join with us if you want', publicationTime: '10'},
            {img: news3, itemTitle: 'Any one can join with us if you want', publicationTime: '18'},
            {img: news4, itemTitle: 'Any one can join with us if you want', publicationTime: '25'},
            {img: news5, itemTitle: 'Any one can join with us if you want', publicationTime: '39'},
        ],

    } );

    return <TopNews state={state} setState={setState}/>
};