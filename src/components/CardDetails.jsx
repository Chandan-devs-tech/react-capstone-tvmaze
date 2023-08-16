import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../styles/CardDetails.css';

function CardDetails() {
  const navigate = useNavigate();
  return (
    <div>
      <button type="button" onClick={() => navigate('/')}>
        <FontAwesomeIcon icon={faBackward} className="backIcon" />
        Back
      </button>
      Details
    </div>
  );
}

export default CardDetails;
