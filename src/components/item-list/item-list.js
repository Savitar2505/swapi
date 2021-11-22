import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import './item-list.css';

export default class ItemList extends Component {
  state = {
    data: []
  }

  swapi = new SwapiService()

  componentDidMount = () => {
    this.swapi.getAllPeople().then((data) => {
      this.setState({
        data: data
      })
    })
  }

  render() {
    const content = this.state.data.map(item => {
      return (
        <li key={item.id} onClick={() => this.props.onSelectItem(item.id)} className="list-group-item">
          {item.name}
        </li>
      )
    })

    return (
      <ul className="item-list list-group">
        {content}
      </ul>
    );
  }
}
