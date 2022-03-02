import React from "react";
import WithSwapi from "../hoc";
import {ItemDetails, Record} from "../item-details";


const divideFunc =(swapi)=>({
    getData: swapi.getStarship,
    getImage: swapi.getStarshipImage
})

const StarshipDetails =(props)=>{

    return (
        <ItemDetails
            {...props}
        >
            <Record label='Model' fieldName='model' />
            <Record label='Manufacturer' fieldName='manufacturer' />
            <Record label='Cost' fieldName='costInCredits' />
            <Record label='Length' fieldName='length' />
            <Record label='Crew' fieldName='crew' />
            <Record label='Passengers' fieldName='passengers' />
            <Record label='Cargo Capacity' fieldName='cargoCapacity' />

        </ItemDetails>
    )
}
export default WithSwapi(StarshipDetails, divideFunc)