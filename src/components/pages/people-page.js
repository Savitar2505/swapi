import React, {useState} from "react";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

const PeoplePage = () => {
    const [selectedItem, setSelectedItem]=useState(1)
    return(
    <div className="row mb2">
        <div className="col-md-6">
            <ItemList setSelectedItem={setSelectedItem}/>
        </div>
        <div className="col-md-6">
            <PersonDetails selectedItem={selectedItem}/>
        </div>
    </div>
    )
}

export default PeoplePage