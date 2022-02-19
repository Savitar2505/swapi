import React, {Component, useEffect, useState} from 'react';
import './person-details.css';
import SwapiService from "../../services/swapi-service";
import Loader from "../loader";

const PersonDetails =()=> {
  const [data, setData]=useState({
    loading: true,
    error: false
  })
  const swapi = new SwapiService()
  useEffect(()=>{
    const id = 4;
    swapi.getPerson(id).then(data => {
      setData({...data, loading: false, error: false})
    }).catch(error => {
      setData({...data, loading: false, error: true})
    })
  }, [])
  if(data.loading){
    return (
        <Loader />
    )
  }
  const {id, name, gender, birth_year, eye_color} = data
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
              <span>{birth_year}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eye_color}</span>
            </li>
          </ul>
        </div>
      </div>
    )
}
export default PersonDetails