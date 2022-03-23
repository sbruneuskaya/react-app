import { Link } from 'react-router-dom';
import './styles.modules.scss';
import { ReactComponent as Logo } from './../../assets/images/logo.svg'

const Header = () => (
  <header className='header'>
    <Logo />
    <nav className='header-nav'>
      <ul className='header-link'>
        <li className='header-item'><Link to='/'>Home</Link></li>
        <li className='header-item'><Link to='/roster'>All Repositories</Link></li>
        <li className='header-item'><Link to='/schedule'>Top 10 Repositories</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header