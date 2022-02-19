import React, {useEffect, useState, useContext} from 'react';
import './item-list.css';
import Loader from "../loader";
import {Consumer} from "../swapi-context";

 const ItemList =({setSelectedItem})=>{
     const [data, setData] = useState (
         {
             people: [],
             loading: true,
             error: false
         })
     const swapi = useContext(Consumer)
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
            <li key={item.id} className="list-group-item" onClick={()=>setSelectedItem(item.id)}>
                {item.name}
            </li>
        )
    })
     return (
      <ul className="item-list list-group">
          { elements }
      </ul>
    );
 }
export default ItemList

