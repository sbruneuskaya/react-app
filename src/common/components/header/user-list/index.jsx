import React from "react";
import users from "./../data";
import './styles.modules.scss';
import { ReactComponent as Logo } from './../../../../assets/images/logo.svg';

const UserList = React.memo(function UserList(){
    return(
        <div className="container__card">
            {users.map((item)=>{
                return(
                    <div className="card">
                        <div className="card__info">
                            <Logo />
                            <p className="card__item">{item.currentRepository}/{item.lp}</p>
                            <p className="card__info__p">{item.archive} archive</p>
                        </div>
                        <p className="card__p">Make your Docker Compose applications reusable, and share them on {item.lp} Hub</p>
                        <ul className="card__info">{item.repositories.map((el)=> <li className="card__item bg__color">{el}</li>)}</ul>
                        <div className="info">
                            <p className="card__p">{item.lp}</p>
                            <p className="card__p">updsted on {item.lastCommitDate}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
})

export default UserList;