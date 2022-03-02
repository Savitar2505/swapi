import ItemList from "../item-list";
import React from "react";
import WithSwapi from "../hoc";

const divideFunc =(swapi)=>({
    getData: swapi.getAllPeople
})

const PeopleList =(props)=>{

    return (
        <ItemList {...props}>
            {(item)=>item.name}
        </ItemList>
    )
}
export default WithSwapi(PeopleList, divideFunc)