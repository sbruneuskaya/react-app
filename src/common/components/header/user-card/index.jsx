import React from "react";
import users from "./../data";
import './styles.modules.scss';

const UserCard = React.memo(function UserCard(){
    return(
        <>
            {users.map((item)=>{
                return(
                <>
                <p className="card__p">Make your Docker Compose applications reusable, and share them on {item.lp} Hub</p>
                <ul className="card__info">{item.repositories.map((el)=> <li className="card__item bg__color">{el}</li>)}</ul>
                <div className="info">
                    <p className="card__p">{item.lp}</p>
                    <p className="card__p">updated on {item.lastCommitDate}</p>
                </div> 
                </>
                )
            })}
        </>           

    )
});

export default UserCard;