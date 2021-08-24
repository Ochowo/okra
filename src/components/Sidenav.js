import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faChartBar } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <nav className="bg-sideNavBg text-white flex flex-col min-h-customHeight">
    <NavLink
      exact
      activeClassName="bg-active text-white"
      className="bg-transparent text-white p-4 flex justify-center flex-col items-center"
      to="/"
    >
      <FontAwesomeIcon icon={faUserFriends} />
      Recommendations
    </NavLink>
    <NavLink
      activeClassName="bg-active text-white"
      className="bg-transparent text-white p-4 flex justify-center flex-col items-center"
      to="/reports"
    >
      <FontAwesomeIcon icon={faChartBar} />
      Reports
    </NavLink>
  </nav>
);

export default Navbar;
