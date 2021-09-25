import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import './person-details.css';


const Record = ({label, fieldName, item}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[fieldName]}</span>
    </li>
  )
}


class ItemDetails extends Component {
  swapi = new SwapiService()

  state = {
    item: {}
  }

  componentDidMount() {
    const id = this.props.selectedItemId
    this.swapi.getPerson(id).then(data => this.setState({item: data}))
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedItemId != this.props.selectedItemId) {
      const id = this.props.selectedItemId
      this.swapi.getPerson(id).then(data => this.setState({item: data}))
    }
  }

  render() {
    const {id, name, gender, birthYear, eyeColor} = this.state.item

    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">

            {React.Children.map(this.props.children, (item) => {
                  const newElement = React.cloneElement(item, {item: this.state.item})
                  return newElement;
                }
              )
            }

          </ul>
        </div>
      </div>
    )
  }
}

export {Record, ItemDetails}
