import ItemList from "../item-list";
import React from "react";
import WithSwapi from "../hoc";


const withChildrenFunc = (Component) => {
    return(props)=>{
        return(
            <Component {...props}>
                {(item)=>item.name}
            </Component>
        )
    }
}

const PeopleList = WithSwapi(
    withChildrenFunc(ItemList),
    (swapi)=> ({
        getData: swapi.getAllPeople
    })
)
const PlanetList = WithSwapi(
    withChildrenFunc(ItemList),
    (swapi)=> ({
        getData: swapi.getAllPlanets
    })
)
const StarshipList = WithSwapi(
    withChildrenFunc(ItemList),
    (swapi)=> ({
        getData: swapi.getAllStarships
    })
)

export {PeopleList, PlanetList, StarshipList};