import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/CardDetails.css';

// function stripHtmlTags(html) {
//   const tempElement = document.createElement('div');
//   tempElement.innerHTML = html;
//   return tempElement.textContent || tempElement.innerText || '';
// }

function CardDetails() {
  const data = useSelector((state) => state.show.shows);
  const { id } = useParams();
  const idToInt = parseInt(id, 10);
  const filterData = data.filter((item) => item.id === idToInt);
  const navigate = useNavigate();
  return (
    <div className="detailsMainContainer">
      <button type="button" onClick={() => navigate('/')} className="backBtn">
        <FontAwesomeIcon icon={faBackward} className="backIcon" />
        Back
      </button>
      {filterData.map((show) => (
        <div key={show.id} className="detailsSubContainer">
          <div className="imgContainer">
            <Link
              to={show.url}
              target="_blank"
              rel="noopener noreferrer"
              role="link"
              tabIndex="0"
            >
              <img
                src={show.image}
                alt="show-imgs"
                className="subCardImg"
              />
            </Link>
          </div>
          <div className="detailsContainer">
            <div className="detailTitle">
              {show.name}
              &apos;s details:
            </div>
            <ul className="detailInfo">
              <li className="detailItem">
                <span className="title">Name: </span>
                <span className="info">{show.name}</span>
              </li>
              <li className="detailItem">
                <span className="title">Day: </span>
                <span className="info">{show.day}</span>
              </li>
              <li className="detailItem">
                <span className="title">Language: </span>
                <span className="info">{show.language}</span>
              </li>
              <li className="detailItem">
                <span className="title">Genres: </span>
                <span className="genreInfo">{show.genres.join(' | ')}</span>
              </li>
              <li className="detailItem">
                <span className="title">Time: </span>
                <span className="info">{show.time}</span>
              </li>
              <li className="detailItem">
                <span className="title">Average runtime: </span>
                <span className="info">{show.averageRunTime}</span>
              </li>
              <li className="detailItem">
                <span className="title">Rating: </span>
                <span className="info">{show.rating}</span>
              </li>
              <li className="detailItem">
                <span className="title">Popularity: </span>
                <span className="info">{show.popularity}</span>
              </li>
              <li className="detailItem">
                <span className="title">Started: </span>
                <span className="info">{show.started}</span>
              </li>
              <li className="detailItem">
                <span className="title">Ended: </span>
                <span className="info">{show.ended}</span>
              </li>
              {/* <li className="detailItem">
                <span className="title">Summary: </span>
                <span className="info">{stripHtmlTags(show.summary)}</span>
              </li> */}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardDetails;
