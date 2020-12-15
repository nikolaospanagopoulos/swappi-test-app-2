import React, { useEffect } from "react";
import "./HomePage.css";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Compononents/Loading/Loading";
import Message from '../../Compononents/Message/Message';
import { listPlanets } from "../../actions/planetActions";
// i downloaded react csv , a package that allows me to create csv files
import { CSVLink } from "react-csv";



const HomePage = () => {
     //i use dispatch to be able to use the action
  const dispatch = useDispatch();

  //i use useSelector to select the part of the state that i want to use
  const planetList = useSelector((state) => state.planetList);
  const { loading, error, planets } = planetList;

  useEffect(() => {
     // i call my action inside useEffect so that it can fire when the page renders
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
                An app created to spread the the amazing cultural phenomenon! star wars!
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
