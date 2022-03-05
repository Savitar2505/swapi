import React from "react";
import {PeopleList, PersonDetails} from '../sw-components'
import Row from "../row";
import {withRouter} from "react-router-dom";


const PeoplePage = ({selectedItem, history}) => {

    const setSelectedItemId =(id)=>{
        history.push(id)
    }

    const leftElement = <PeopleList setSelectedItem={setSelectedItemId}/>
    const rightElement = <PersonDetails selectedItem={selectedItem}/>

    return <Row left={leftElement} right={rightElement}/>
}

export default withRouter(PeoplePage)