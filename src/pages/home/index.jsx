import './styles.modules.scss';
import WhatIsGit from './what-is-git';
import WhatIsGitHub from './what-is-github';
import WhatIsVersionControl from './what-is-version-control';

function Home() {

    return (
        <div className='home'>
            <WhatIsGitHub />
            <WhatIsVersionControl />
            <WhatIsGit />
        </div>
    )
}

export default Home;
