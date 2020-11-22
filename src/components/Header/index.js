import './css/index.css';
import {useState} from 'react';

function Header() {
  const darkMode = useState(false);

  function toggleDarkMode() {
    darkMode = !darkMode;
  }

  function toggleSiteColor() {
    document.getElementsByTagName("html")[0].classList.toggle("dark");
    toggleDarkMode();
  }

  return (
    <header className="header">
      <div className="container is-flex">
        <span className="header-title">Where in the world?</span>
        <form className="header-toggle">
          <label for="site-color" className="header-toggle-label">
            Dark Mode
            <input type="checkbox" name="site-color" id="site-color" className="header-toggle-input" onChange={ toggleSiteColor } />
          </label>
        </form>
      </div>
    </header>
  );
}

export default Header;
