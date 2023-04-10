import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export const Header = () => {
  const buttonClicked = useSelector((state) => state.example.buttonClicked);

  return (
    <Nav>
      <Link to="/">
        <FaHome size={25} />
      </Link>

      <Link to="/login">
        <FaUserAlt size={25} />
      </Link>

      <Link to="/sair">
        <FaSignInAlt size={25} />
      </Link>
      <a>{buttonClicked ? 'Clicked' : 'No Clicked'}</a>
    </Nav>
  );
};
