import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
import SearchBar from '../Searchbar/Searchbar';

const Navbar = () => {
  return (
    <div className={style.mainContainer}>
      <Link to="/home">HOME</Link>
      <Link to="/create">FORM</Link>
      <Link to="/activities">ACTIVITIES</Link>
      <SearchBar />
    </div>
  );
};

export default Navbar;
