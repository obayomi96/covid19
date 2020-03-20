import React from 'react';
import './search-result.css';

const SearchResult = ({ countryName, confirmed, recovered, deaths, latestUpdate }) => {
  return (
    <div>
      <h3 className="updatedAt">Last updated on {latestUpdate}</h3>
      <div className="search-res-div">
        <div className="case-value" >
          <h1 style={{ color: 'grey' }}>country: {countryName}</h1>
        </div>
        <div className="case-value" >
          <h1 style={{ color: 'orange' }}>confirmed: {confirmed}</h1>
        </div>
        <div className="case-value" >
          <h1 style={{ color: 'green' }}>recovered: {recovered}</h1>
        </div>
        <div className="case-value" >
          <h1 style={{ color: 'red' }}>deaths: {deaths}</h1>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
