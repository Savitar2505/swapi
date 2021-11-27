import React from 'react'
import ItemList from '../item-list';
import {withSwapiService} from '../hoc';

const PeopleList = withSwapiService(
  ItemList,
  (swapi) => {
    return {
      getData: swapi.getAllPeople
    }
  }
)

const PlanetList = withSwapiService(
  ItemList,
  (swapi) => {
    return {
      getData: swapi.getAllPlanets
    }
  }
)

export {PeopleList, PlanetList}
