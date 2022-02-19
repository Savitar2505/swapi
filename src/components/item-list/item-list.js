import React, {useEffect, useState} from 'react';
import './item-list.css';
import SwapiService from "../../services/swapi-service";
import Loader from "../loader";

 const ItemList =()=>{
     const [data, setData] = useState (
         {
             people: [],
             loading: true,
             error: false
         })
     const swapi = new SwapiService()
    useEffect(()=>{
        swapi.getAllPeople().then(data=>{
            setData({...data, people: data, loading: false, error: false})
        }).catch(error=>{
            setData({...data, loading: false, error: true})
        })
    }, [])

     if (data.loading) {
         return <Loader />
     }

    const elements = data.people.map((item)=>{
        return(
            <li className="list-group-item">
                {item.name}
            </li>
        )
    })
    console.log(data.people.name)
     return (
      <ul className="item-list list-group">
          { elements }
      </ul>
    );
 }
export default ItemList

