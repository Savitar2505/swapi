import React, {useContext, useEffect, useState} from 'react';
import './person-details.css';

import Loader from "../loader";
import {Consumer} from "../swapi-context";

const PersonDetails =({selectedItem})=> {

  const [data, setData]=useState({
    loading: true,
    error: false
  })

  const swapi = useContext(Consumer)
  useEffect(()=>{
    swapi.getPerson(selectedItem).then(data => {
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

  const {id, name, gender, birthYear, eyeColor} = data
  const imgUrl = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`

    return (
      <div className="person-details card">
        <img className="person-image"
          src={imgUrl} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
}
export default PersonDetails