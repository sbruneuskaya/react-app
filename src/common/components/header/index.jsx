import users from "./data";
import './styles.modules.scss';

function Users({currentRepository, lp, repositories, lastCommitDate, archive}){
    return (
        <div className="container">
            <div className="container__card">
                {users.map((item)=>{
                return(
                    <div className="card">
                        <div className="card__info">
                            <p className="card__item">{item.currentRepository}/{item.lp}</p>
                            <p className="card__info__p">{item.archive} archive</p>
                        </div>
                        <p className="card__p">Make your Docker Compose applications reusable, and share them on {item.lp} Hub</p>
                        <div className="card__item bg__color">{item.repositories}</div>
                        <div className="info">
                            <p className="card__p">{item.lp}</p>
                            <p className="card__p">updsted on {item.lastCommitDate}</p>
                        </div>
                    </div>
                )
                })}
            </div>
        </div>
    )
};

export default Users;