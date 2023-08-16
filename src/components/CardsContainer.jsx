import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { fetchShow } from '../redux/show/showSlice';
import '../styles/CardsContainer.css';

function CardsContainer() {
  const dispatch = useDispatch();
  const allTvShow = useSelector((state) => state.show.shows);

  useEffect(() => {
    if (allTvShow.length === 0) {
      dispatch(fetchShow());
    }
  }, [dispatch]);

  return (
    <div className="mainContainer">
      <div className="searchBar">
        <form className="form">
          <input type="search" className="searchBox" placeholder="Search by the show name" />
        </form>
      </div>
      <div className="cardContainer">
        {allTvShow.map((show) => (
          <div className="cardShow" key={show.id}>
            <div className="cardImgContainer">
              <img src={show.image} alt="showImage" className="cardImg" />
              <Link to={`/details/${show.id}`}>
                <FontAwesomeIcon icon={faCircleArrowRight} className="nextIcon" />
              </Link>
            </div>
            <div className="cardDetail">
              <p className="name">
                Name:
                {show.name}
              </p>
              <p className="rate">
                Rate:
                {show.rating}
              </p>
              <p className="time">
                Time:
                {show.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsContainer;
