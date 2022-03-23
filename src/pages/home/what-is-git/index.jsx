import info from './../what-is-github/data'

function WhatIsGit() {

    return (
        <>
            {info.map((item) => {
                if(item.id === 3){
                return(
                    <>
                        <p className='size-title margin-bt'>{item.title}</p>
                        {item.subtitle.map((el)=><p className='size-text margin-bt'>{el}</p>)}
                    </>
               )
                }else return '';
             } )}
        </>
    )
}

export default WhatIsGit;