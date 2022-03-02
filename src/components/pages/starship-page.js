import React, {useState} from "react";
import {StarshipList, StarshipDetails} from '../sw-components'
import Row from "../row";


const StarshipPage = () => {
    const [selectedItem, setSelectedItem]=useState(1)

    const leftElement = <StarshipList setSelectedItem={setSelectedItem}/>
    const rightElement = <StarshipDetails selectedItem={selectedItem}/>

    return <Row left={leftElement} right={rightElement}/>
}

export default StarshipPage