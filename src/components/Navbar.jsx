import '../stylesheets/Navbar.css';
import fccLogo from '../images/fcc_primary_large.png'

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="homepage-navbar">
          <img className="website-logo" src={fccLogo} alt="lupleg logo" />
        </nav>
      </header>
    </>
  );
}

export default Navbar;