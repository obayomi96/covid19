import React from 'react';
import './search-result.css';

const SearchResult = ({ countryName, confirmed, recovered, deaths, latestUpdate }) => {
  return (
    <div>
      <div>
        <h2 style={{ color: 'grey', textAlign: 'center', borderTop: '1px solid #ddd' }}>TOTAL CASES IN {countryName}</h2>
      </div>
      <div className="search-res-div">
        <div className="case-value" >
          <h3 style={{ color: 'orange' }}>Confirmed {confirmed}</h3>
        </div>
        <div className="case-value" >
          <h3 style={{ color: 'green' }}>Recovered {recovered}</h3>
        </div>
        <div className="case-value" >
          <h3 style={{ color: 'red' }}>Deaths {deaths}</h3>
        </div>
      </div>
      <h3 className="updatedAt">Last updated at {latestUpdate}</h3>
    </div>
  );
}

export default SearchResult;
