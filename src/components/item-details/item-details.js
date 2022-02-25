import React, {useEffect, useState} from 'react';
import './item-details.css';
import Loader from "../loader";

const Record = ({label, fieldName, data}) => {
  return (
      <li className="list-group-item">
        <span className="term">{label}</span>
        <span>{data[fieldName]}</span>
      </li>
  )
}

const ItemDetails =({selectedItem, getData, getImage, children})=> {

  const [data, setData]=useState({
    loading: true,
    error: false
  })

  useEffect(()=>{
    getData(selectedItem).then(data => {
      setData({...data, loading: false, error: false})
    }).catch(error => {
      setData({...data, loading: false, error: true})
    })
  }, [selectedItem])

  if(data.loading){
    return (
        <Loader />
    )
  }

  const {id, name,} = data
  const imgUrl = getImage(id)

    return (
      <div className="person-details card">
        <img className="person-image"
          src={imgUrl} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(children, (record)=>{
                return React.cloneElement(record, {data: data})
              })
            }
          </ul>
        </div>
      </div>
    )
}
export {ItemDetails, Record}