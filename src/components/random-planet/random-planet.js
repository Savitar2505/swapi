import React, {useState, useEffect} from 'react';
import SwapiService from '../../services/swapi-service';
import './random-planet.css';
import Loader from "../loader";



const RandomPlanet = () => {
  const [data, setData] = useState({
    loading: true,
    error: false,
  })

  const swapi = new SwapiService()
  const firstPlanet = () => {
    const id = Math.floor(Math.random() * (20 - 1) + 1);
    swapi.getPlanet(id).then(data => {
      setData({...data, loading: false, error: false})
    }).catch(error => {
      setData({...data, loading: false, error: true})
    })
  }
  useEffect(()=>{
    firstPlanet()
  }, [])
  useEffect(() => {
    const planetInterval = setInterval(() => {
      firstPlanet()
    }, 2500)

    return () => clearInterval(planetInterval)
  }, [])
  const {id, name, population, rotationPeriod, diameter} = data;
  const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`

  if (data.loading) {
      return <Loader />
  }

  return (
    <div className="random-planet jumbotron rounded">
      <img className="planet-image" src={imageUrl} />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RandomPlanet;
