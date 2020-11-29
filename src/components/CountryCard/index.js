import './css/index.css';

import { Link } from "react-router-dom";

function CountryCard(props) {

  return (
    <div className="column is-12-mobile is-4-tablet is-3-desktop">
      <Link to="/country">
        <div className="card">
          <img src={ props.image } className="card-image" />
          <h2 className="card-header-title">{ props.name }</h2>
          <p>Population: { props.population }</p>
          <p>Region: { props.region }</p>
          <p>Capital: { props.capital }</p>
        </div>
      </Link>
    </div>
  );
}

export default CountryCard;
