import React from 'react';
import {Provider} from "../swapi-context";
import SwapiService from "../../services/swapi-service";
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from "../pages";
import './app.css';

const swapi = new SwapiService()

const App = () => {

  return (
    <div>
        <Provider value={swapi}>
            <Header />
            <RandomPlanet />
            <PeoplePage/>
        </Provider>
    </div>
  );
};

export default App;
