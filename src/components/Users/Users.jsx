import React from "react";
import Paginator from "../common/paginator/Paginator";
import UserData from "./UserData";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {

    return <div>

        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} pageSize={pageSize}
        />

        <div>
            {users.filter(u => u.photos.small !== null).map(u =>
                <UserData user={u}
                          key={u.id}
                          followingInProgress={props.followingInProgress}
                          unfollow={props.unfollow}
                          follow={props.follow}
                />
            )
            }
        </div>
    </div>
};

export default Users;