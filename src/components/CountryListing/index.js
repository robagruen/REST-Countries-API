import './css/index.css';

import CountryCard from '../CountryCard/index.js';

import { useState, useEffect } from 'react';

function CountryListing() {
  const baseApiRoute = 'https://restcountries.eu/rest/v2/';
  const [countryResults, setCountryResults] = useState([]);
  const [apiRoute, setApiRoute] = useState( baseApiRoute + 'all' );

  useEffect( () => {   
    fetch(apiRoute)
      .then(results => results.json())
      .then(data => {
        setCountryResults(data);
      });  
  });

  function searchByCountryName() {
    let name = document.getElementById("name-input").value;
    let apiRoute = baseApiRoute + 'name/' + name;
    setApiRoute( String(apiRoute) );
  }

  function searchByCountryRegion() {
    let region = document.getElementById("region-select").value;
    let apiRoute = baseApiRoute + 'region/' + region;
    setApiRoute( String(apiRoute) );
  }

  return (
    <div className="country-listing">
      <div className="container is-fluid">
        <div>
          <form className="country-listing-form">
            <input id="name-input" type="text" oninput={ searchByCountryName } />
            <select id="region-select" onChange={ searchByCountryRegion }>
              <option>Filter by Region</option>
              <option value="africa">Africa</option>
              <option value="america">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </form>
        </div>
        <div className="columns is-multiline is-mobile">
          {countryResults.map(countryResults => (
            <CountryCard name={ countryResults.name } population={ countryResults.population } region={ countryResults.region } capital={ countryResults.capital } countryID={ countryResults.countryID } image={ countryResults.flag } />
          ))}
        </div>
      </div>
    </div>
  );

}

export default CountryListing;
