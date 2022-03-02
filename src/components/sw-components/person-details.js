import React from "react";
import WithSwapi from "../hoc";
import {ItemDetails, Record} from "../item-details";


const divideFunc =(swapi)=>({
    getData: swapi.getPerson,
    getImage: swapi.getPersonImage
})

const PersonDetails =(props)=>{

    return (
        <ItemDetails
            {...props}
        >
            <Record label='Gender' fieldName='gender' />
            <Record label='Eye color' fieldName='eyeColor' />
            <Record label='Birth year' fieldName='birthYear' />
        </ItemDetails>
    )
}
export default WithSwapi(PersonDetails, divideFunc)