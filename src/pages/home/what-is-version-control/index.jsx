import info from './../what-is-github/data'

function WhatIsVersionControl() {

    return (
        <>
            {info.map((item) => {
                if(item.id === 2){
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

export default WhatIsVersionControl;