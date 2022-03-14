import React from "react";
// import users from "./data";
import './styles.modules.scss';
// import { ReactComponent as Logo } from './../../../assets/images/logo.svg';
import UserList from "./user-list";


const Header = React.memo(function Header(){
    return (
        <div className="container">
            <UserList />
        </div>
    )
    });
    

export default Header;