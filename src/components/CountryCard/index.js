import './css/index.css';

import { Link } from "react-router-dom";

function CountryCard(props) {

  return (
    <div className="column is-12-mobile is-6-tablet is-4-desktop is-3-widescreen">
      <h2>{ props.name }</h2>
      <div>
        <p>Population: { props.population }</p>
        <p>Region: { props.region }</p>
        <p>Capital: { props.capital }</p>
      </div>
      <Link to="/country">See Country</Link>
    </div>
  );
}

export default CountryCard;
