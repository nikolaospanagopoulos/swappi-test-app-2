import React, { useEffect } from "react";
import "./HomePage.css";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Compononents/Loading/Loading";
import Message from '../../Compononents/Message/Message';
import { listPlanets } from "../../actions/planetActions";
import { CSVLink } from "react-csv";

const HomePage = () => {
  const dispatch = useDispatch();

  const planetList = useSelector((state) => state.planetList);
  const { loading, error, planets } = planetList;

  useEffect(() => {
    dispatch(listPlanets());
  }, [dispatch]);
  const csvData = planets;

  return (
    <div>
      <div>
        {loading ? (
          <Loading />
        ) : error ? (
          <Message color='red'> {error} </Message>
        ) : (
          <div>
            <div>
              <h1 className="main-title">STAR WARS</h1>
              <h2 className="main-subtitle">
                An app created because of my love for star wars!
              </h2>
            </div>
            <div className="download-container">
              <CSVLink data={csvData}>
                <button className="download">
                  PRESS ME TO Download Planets in Wookie Language!!!
                </button>
              </CSVLink>
              ;
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
