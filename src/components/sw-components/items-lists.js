import React from 'react';
import ItemList from '../item-list';
import withData from '../hoc'
import SwapiService from '../../services/swapi-service';


const swapi = new SwapiService()
const {getAllPeople, getAllPlanets, getAllStarships} = swapi;


const PeopleList = withData(ItemList, getAllPeople);
const PlanetList = withData(ItemList, getAllPlanets);
const StarshipList = withData(ItemList, getAllStarships);


export {PeopleList, PlanetList, StarshipList}
