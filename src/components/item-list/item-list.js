import React, {useEffect, useState} from 'react';
import './item-list.css';
import Loader from "../loader";
import WithSwapi from "../hoc";

 const ItemList =({ setSelectedItem, getData, children })=>{
     const [data, setData] = useState (
         {
             loading: true,
             error: false
         })
    useEffect(()=>{
        getData().then(data=>setData(data))
            .catch(error=>error)
    }, [])

     if (data.loading) {
         return <Loader />
     }

    const elements = data.map((item)=>{
        return(
            <li key={item.id}
                className="list-group-item"
                onClick={()=>setSelectedItem(item.id)}
            >
                { children(item) }
            </li>
        )
    })
     return (
      <ul className="item-list list-group">
          { elements }
      </ul>
    );
 }

 const divideFunc = (swapi) => ({
   getData:swapi.getAllPeople()
 })
export default WithSwapi(ItemList, divideFunc)

