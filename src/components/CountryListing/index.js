import './css/index.css';

import CountryCard from '../CountryCard/index.js';

import { useEffect } from 'react';

function CountryListing() {

  let countryResults = [
    {
      name: 'RobLand',
      population: '7',
      region: 'NA',
      capital: 'Cincinnati',
      countryID: '7',
    },
    {
      name: 'RobLand',
      population: '8',
      region: 'NA',
      capital: 'Cincinnati',
      countryID: '7',
    },
  ];

  useEffect( () => {   
    fetch('https://restcountries.eu/rest/v2/region/europe')
      .then(results => results.json())
      .then(data => {
        console.log(data)
        countryResults = data;
      });  
  });

  return (
    <div className="country-listing">
      <div className="container is-fluid">
        <div>
          <form className="country-listing-form">
            <input type="text" />
            <select>
              <option>Filter by Region</option>
              <option>Africa</option>
              <option>America</option>
              <option>Asia</option>
              <option>Europe</option>
              <option>Oceania</option>
            </select>
          </form>
        </div>
        <div className="columns is-multiline is-mobile">
          {countryResults.map(countryResults => (
            <CountryCard />
          ))}
          <CountryCard name="RobLand" population="7" region="NA" capital="Cincinnati" countryID="7" />
          <CountryCard name="RobLand" population="7" region="NA" capital="Cincinnati" countryID="7" />
          <CountryCard name="RobLand" population="7" region="NA" capital="Cincinnati" countryID="7" />
          <CountryCard name="RobLand" population="7" region="NA" capital="Cincinnati" countryID="7" />
        </div>
      </div>
    </div>
  );

}

export default CountryListing;
