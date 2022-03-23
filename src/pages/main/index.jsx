import {  Route, Switch } from 'react-router-dom';
import PopularRepositories from '../../common/components/popular-repositories';
import UserCard from '../../common/components/user-card';
import Home from '../home';

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/roster' component={UserCard}/>
        <Route path='/schedule' component={PopularRepositories}/>
      </Switch>
    </main>
)

export default Main;

