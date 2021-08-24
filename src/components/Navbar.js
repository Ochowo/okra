import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../public/logo.png';

const Navbar = () => (
  <nav className="bg-grey1 text-white flex justify-between items-center px-6 py-3 min-h-oneTenth">
    <NavLink
      to="/"
      className="h-8 w-28"
    >
      {' '}
      <img src={logo} className="App-logo" alt="logo" />

    </NavLink>
    <FontAwesomeIcon icon={faBars} size="lg" />
  </nav>
);

export default Navbar;
