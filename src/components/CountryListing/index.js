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

  function disableFormSubmit(event) {
    event.preventDefault();
  }

  function searchByCountryName(event) {
    let name = event.target.value;
    let apiRoute = baseApiRoute + 'name/' + name;
    setApiRoute( String(apiRoute) );
  }

  function searchByCountryRegion() {
    let region = document.getElementById("region-select").value;
    let apiRoute = baseApiRoute + 'region/' + region;
    setApiRoute( String(apiRoute) );
  }

  function displayCountryCards() {
    
  }

  return (
    <div className="country-listing">
      <div className="container is-fluid">
        <div>
          <form className="country-listing-form" onSubmit={ disableFormSubmit }>
            <input id="name-input" type="text" onInput={ searchByCountryName } placeholder="Search for a country..." />
            <select id="region-select" onChange={ searchByCountryRegion }>
              <option selected disabled>Filter by Region</option>
              <option value="africa">Africa</option>
              <option value="america">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </form>
        </div>
        <div className="columns is-multiline is-mobile">
          {countryResults.map(country => (
            countryResults.length > 0
              ? <CountryCard name={ country.name } population={ country.population } region={ country.region } capital={ country.capital } countryID={ country.countryID } image={ country.flag } />
              : <p>There were no results found.</p>
          ))}
        </div>
      </div>
    </div>
  );

}

export default CountryListing;
