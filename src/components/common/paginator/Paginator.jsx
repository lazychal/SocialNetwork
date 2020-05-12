import React, {useState} from "react";
import s from './Paginator.module.css'
import cn from 'classnames';

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionsSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionsSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPotionPageNumber = (portionNumber - 1) * portionsSize + 1;
    let rightPortionPageNumber = portionNumber * portionsSize;

    return <div className={s.paginator}>
        { portionNumber > 1 &&
        <button onClick={()=>{ setPortionNumber(portionNumber - 1) }}
        className={s.leftButton}>PRE</button> }

        {pages
            .filter(p => p >= leftPotionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
            return <span className={ cn({
                [s.selectedPage]: currentPage === p
            }, s.pageNumber) }
                        key={p}
                         onClick={(e) => {
                             onPageChanged(p)
                         }}> {p} </span>
        })}
        { portionCount > portionNumber &&
        <button onClick={()=>{setPortionNumber(portionNumber+1) }}
        className={s.rightButton}>NXT</button>}
    </div>
};

export default Paginator;