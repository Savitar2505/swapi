import React from "react";
import WithSwapi from "../hoc";
import {ItemDetails, Record} from "../item-details";


const divideFunc =(swapi)=>({
    getData: swapi.getPlanet,
    getImage: swapi.getPlanetImage
})

const PlanetDetails =(props)=>{

    return (
        <ItemDetails
            {...props}
        >
            <Record label='Population' fieldName='population' />
            <Record label='Rotation Period' fieldName='rotationPeriod' />
            <Record label='Diameter' fieldName='diameter' />
        </ItemDetails>
    )
}
export default WithSwapi(PlanetDetails, divideFunc)