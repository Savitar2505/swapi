import React, {useState} from "react";
import {PlanetList, PlanetDetails} from '../sw-components'
import Row from "../row";


const PlanetPage = () => {
    const [selectedItem, setSelectedItem]=useState(1)

    const leftElement = <PlanetList setSelectedItem={setSelectedItem}/>
    const rightElement = <PlanetDetails selectedItem={selectedItem}/>

    return <Row left={leftElement} right={rightElement}/>
}

export default PlanetPage