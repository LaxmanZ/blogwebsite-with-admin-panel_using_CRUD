import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  return (
    <nav>
      <div className="container nav-container">
        <Link className="nav-logo" to={'/'}>
          <img src={Logo} alt="logo" />
        </Link>

        <ul className="nav-menu">
          <li>
            <Link to={'/profile'}>Beg Joker</Link>
          </li>
          <li>
            <Link to={'/create'}>Create Post</Link>
          </li>
          <li>
            <Link to={'/author'}>Authors</Link>
          </li>
          <li>
            <Link to={'/logout'}>Logout</Link>
          </li>
        </ul>

        <button className="nav-toggle-button btn btn-primary">
          <FaBars />
          <AiOutlineClose />
        </button>
      </div>
    </nav>
  );
};

export default Header;
