import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import './person-details.css';


export default class PersonDetails extends Component {
  state = {
    item: {},
    itemImg: ''
  }

  swapi = new SwapiService()

  componentDidMount = () => {
    const id = this.props.selectedItem;

    this.swapi.getPerson(id).then((data) => {
      this.setState({
        item: data
      })
    })
  }

  componentDidUpdate = (oldProps, oldState) => {
    if (oldProps.selectedItem != this.props.selectedItem) {
      const id = this.props.selectedItem;

      this.swapi.getPerson(id).then((data) => {
        this.setState({
          item: data
        })
      })
    }
  }

  render() {

    const {id, name, gender, birthYear, eyeColor} = this.state.item;
    const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`

    return (
      <div className="person-details card">
        <img className="person-image" src={imageUrl} />

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
}
