import React from 'react'
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import Row from '../row';

class PeoplePage extends React.Component {
  state = {
    selectedItem: 4
  }

  onSelectItem = (id) => {
    this.setState({
      selectedItem: id
    })
  }

  render() {
    const left = <ItemList onSelectItem={this.onSelectItem} />
    const right = <PersonDetails selectedItem={this.state.selectedItem} />

    return (
      <Row
        leftElement={left}
        rightElement={right}
      />
    )
  }
}

export default PeoplePage;
