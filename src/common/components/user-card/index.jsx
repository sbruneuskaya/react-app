import React from "react";
import './styles.modules.scss';
import UserList from "./user-list";


const UserCard = React.memo(function Header(){
    return (
        <div className="container">
            <UserList />
        </div>
    )
    });
    

export default UserCard;