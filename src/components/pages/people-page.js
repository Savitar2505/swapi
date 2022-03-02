import React, {useState} from "react";
import {PeopleList, PersonDetails} from '../sw-components'
import Row from "../row";


const PeoplePage = () => {
    const [selectedItem, setSelectedItem]=useState(1)

    const leftElement = <PeopleList setSelectedItem={setSelectedItem}/>
    const rightElement = <PersonDetails selectedItem={selectedItem}/>

    return <Row left={leftElement} right={rightElement}/>
}

export default PeoplePage