import './styles.modules.scss';
import info from './data';

function WhatIsGitHub() {
    return (
        <>
            {info.map((item) => {
                if(item.id === 1){
                return(
                    <>
                    <p className='size-title margin-bt'>{item.title}</p>
                    <div className='img margin-bt'></div>
                    <p className='size-text margin-bt'>{item.subtitle}</p>
                    <ul className='margin-bt'>
                        <li className='size-text li'>{item.firstPoint}</li>
                        <li className='size-text li'>{item.secondPoint}</li>
                    </ul>
                    <p className='size-text margin-bt'>{item.description}</p>
                    </>
               )
                }else return '';
             } )}
        </>
    )
}

export default WhatIsGitHub;