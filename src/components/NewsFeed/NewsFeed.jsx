import React from 'react';
import s from './NewsFeed.module.scss';

const NewsFeed = (props) => {
    return <div className={s.container}>

        <div className={s.newPostContainer}>
            <div className={s.newPost}>
                <div className={s.userThumb}>
                    <a href="#">
                        <img src="https://sun9-46.userapi.com/c637819/v637819780/546d9/aZtyhuT9wPE.jpg"
                             alt="User Picture"
                        />
                    </a>
                </div>
                <div className={s.shareContentBox}>
                    <input className={s.shareTextField}
                           type="text"
                           placeholder='Say Something'
                    />
                    <button className={s.shareBtn}>SHARE</button>
                </div>
            </div>
        </div>

        <div className={s.postsContainer}>
            <div className={s.card}>Some News</div>
            <div className={s.card}>Some News</div>
            <div className={s.card}>Some News</div>
            <div className={s.card}>Some News</div>
        </div>
    </div>
};

export default NewsFeed;