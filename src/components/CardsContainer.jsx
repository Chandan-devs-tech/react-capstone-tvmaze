import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { fetchShow } from '../redux/show/showSlice';
import '../styles/CardsContainer.css';

function CardsContainer() {
  const dispatch = useDispatch();
  const allTvShow = useSelector((state) => state.show.shows);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (allTvShow.length === 0) {
      dispatch(fetchShow());
    }
  }, [dispatch, allTvShow.length]);

  return (
    <div className="mainContainer">
      <div className="searchBar">
        <form className="form">
          <input
            type="search"
            className="searchBox"
            placeholder="Search Shows and People"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="small-4 columns">
            <button type="submit" className="medium button postfix" alt="Search">
              <i className="fa fa-search fa-lg" aria-hidden="true" />
            </button>
          </div>
        </form>
      </div>
      <div className="cardContainer">
        {allTvShow
          .filter((item) => search.trim() === ''
            || item.name.toLowerCase().startsWith(search.toLowerCase()))
          .map((show) => (
            <div className="cardShow" key={show.id}>
              <div className="cardImgContainer">
                <img
                  src={show.image}
                  alt="showImage"
                  className="cardImg"
                />
                <Link to={`/details/${show.id}`}>
                  <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    className="nextIcon"
                  />
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
