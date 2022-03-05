import React from 'react';
import {Provider} from "../swapi-context";
import SwapiService from "../../services/swapi-service";
import Header from '../header';
import RandomPlanet from '../random-planet';
import {PeoplePage, StarshipPage, PlanetPage} from "../pages";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './app.css';

const swapi = new SwapiService()

const App = () => {

  return (
    <div>
        <Provider value={swapi}>
            <Router>
                <Header />
                <RandomPlanet />
                <Route path='/' exact={true} render={()=><h1>Welcome to StarDB</h1>} />

                <Route path='/people/' exact={true} render={({match})=>{
                    const selectedItem = 1
                    return <PeoplePage selectedItem={selectedItem}/>
                }}/>
                <Route path='/planets/' exact={true} render={({match})=>{
                    const selectedItem = 1
                    return <PlanetPage selectedItem={selectedItem}/>
                }}/>
                <Route path='/starships/' exact={true} render={({match})=>{
                    const selectedItem = 2
                    return <StarshipPage selectedItem={selectedItem}/>
                }}/>

                <Route path='/people/:id' exact={true} render={({match})=>{
                    const selectedItem =match.params.id
                    return <PeoplePage selectedItem={selectedItem}/>
                }} />
                <Route path='/planets/:id' exact={true} render={({match})=>{
                    const selectedItem =match.params.id
                    return <PlanetPage selectedItem={selectedItem}/>
                }} />
                <Route path='/starships/:id' exact={true} render={({match})=>{
                    const selectedItem =match.params.id
                    return <StarshipPage selectedItem={selectedItem}/>
                }} />
            </Router>
        </Provider>
    </div>
  );
};

export default App;
