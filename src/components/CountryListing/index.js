import './css/index.css';

import { Link } from "react-router-dom";

function CountryListing() {

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
          <div className="column is-12-mobile is-6-tablet is-4-desktop is-3-widescreen">
            {/* is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd */}
            <h1>Country Listing</h1>
            <Link to="/country">See Country</Link>
          </div>
          <div className="column is-12-mobile is-6-tablet is-4-desktop is-3-widescreen">
            <h1>Country Listing</h1>
            <Link to="/country">See Country</Link>
          </div>
          <div className="column is-12-mobile is-6-tablet is-4-desktop is-3-widescreen">
            <h1>Country Listing</h1>
            <Link to="/country">See Country</Link>
          </div>
          <div className="column is-12-mobile is-6-tablet is-4-desktop is-3-widescreen">
            <h1>Country Listing</h1>
            <Link to="/country">See Country</Link>
          </div>
        </div>
      </div>
    </div>
  );

}

export default CountryListing;
