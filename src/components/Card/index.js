import React from "react";
import PropTypes from "prop-types";

import "./card.css";

const Card = props => {
  const { caseType, caseNumber } = props;

  return (
    <div className="repoCard-div">
      <div className="repo-info">
        <h3>{caseType}</h3>
        <h4>{caseNumber}</h4>
      </div>
    </div>
  );
};

RepoCard.propTypes = {
  caseType: PropTypes.string.isRequired,
  caseNumber: PropTypes.string.isRequired,
};

export default Card;