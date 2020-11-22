import './css/index.css';
import {useState} from 'react';

function Header() {
  const [colorScheme, setcolorScheme] = useState('☀️ Light');

  function setcolorSchemeFunc() {
    let newColorScheme;
    if (colorScheme == '☀️ Light') {
      newColorScheme = '🌙 Dark';
    } else {
      newColorScheme = '☀️ Light';
    }
    document.getElementsByTagName("html")[0].classList.toggle("dark");
    return newColorScheme;
  }

  return (
    <header className="header">
      <div className="container is-fluid is-flex">
        <span className="header-title">Where in the world?</span>
        <form className="header-toggle">
          <label for="site-color" className="header-toggle-label">
            { colorScheme } Mode
            <input type="checkbox" name="site-color" id="site-color" className="header-toggle-input" onChange={ () => setcolorScheme( setcolorSchemeFunc() ) } />
          </label>
        </form>
      </div>
    </header>
  );
}

export default Header;
