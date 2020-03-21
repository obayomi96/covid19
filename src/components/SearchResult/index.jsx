import React from 'react';
import './search-result.css';

const SearchResult = ({ countryName, confirmed, recovered, deaths, latestUpdate }) => {
  return (
    <div>
      <div>
        <h1 style={{ color: 'grey', textAlign: 'center', borderTop: '1px solid #ddd' }}>{countryName}</h1>
      </div>
      <div className="search-res-div">
        <div className="case-value" >
          <h3 style={{ color: 'orange' }}>confirmed {confirmed}</h3>
        </div>
        <div className="case-value" >
          <h3 style={{ color: 'green' }}>recovered {recovered}</h3>
        </div>
        <div className="case-value" >
          <h3 style={{ color: 'red' }}>deaths {deaths}</h3>
        </div>
      </div>
      <h3 className="updatedAt">Last updated on {latestUpdate}</h3>
    </div>
  );
}

export default SearchResult;
