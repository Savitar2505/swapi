import React from 'react'
import ItemDetails from '../item-details';
import {withSwapiService} from '../hoc';


const PersonDetails = withSwapiService(
  ItemDetails,
  (swapi) => {
    return {getData: swapi.getPerson}
  }
)

export default PersonDetails;
