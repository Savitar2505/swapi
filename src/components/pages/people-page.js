import React, {useContext, useState} from "react";
import ItemList from "../item-list";
import {ItemDetails, Record} from "../item-details";
import Row from "../row";
import {Consumer} from "../swapi-context";


const PeoplePage = () => {
    const [selectedItem, setSelectedItem]=useState(1)
    const swapi = useContext(Consumer)

    const leftElement = (
        <ItemList
        setSelectedItem={setSelectedItem}
        getData={swapi.getAllPeople}
    >
        {(item)=>`${item.name}`}
    </ItemList>
    )
    const rightElement = (
        <ItemDetails
        selectedItem={selectedItem}
        getData={swapi.getPerson}
        getImage={swapi.getPersonImage}
    >
        <Record label='Gender' fieldName='gender' />
        <Record label='Eye color' fieldName='eyeColor' />
        <Record label='Birth year' fieldName='birthYear' />
    </ItemDetails>
    )

    return <Row left={leftElement} right={rightElement}/>
}

export default PeoplePage