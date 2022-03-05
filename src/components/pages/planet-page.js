import React from "react";
import {PlanetList, PlanetDetails} from '../sw-components'
import Row from "../row";
import {withRouter} from "react-router-dom";


const PlanetPage = ({selectedItem, history}) => {

    const setSelectedItemId =(id)=>{
        history.push(id)
    }

    const leftElement = <PlanetList setSelectedItem={setSelectedItemId}/>
    const rightElement = <PlanetDetails selectedItem={selectedItem}/>

    return <Row left={leftElement} right={rightElement}/>
}

export default withRouter(PlanetPage)