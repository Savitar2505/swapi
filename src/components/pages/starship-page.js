import React from "react";
import {StarshipList, StarshipDetails} from '../sw-components'
import Row from "../row";
import {withRouter} from "react-router-dom";


const StarshipPage = ({selectedItem, history}) => {

    const setSelectedItemId =(id)=>{
        history.push(id)
    }

    const leftElement = <StarshipList setSelectedItem={setSelectedItemId}/>
    const rightElement = <StarshipDetails selectedItem={selectedItem}/>

    return <Row left={leftElement} right={rightElement}/>
}

export default withRouter(StarshipPage)