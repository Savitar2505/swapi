import React, {useState} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

const App = () => {
  const [showPlanet, setShowPlanet] = useState(true)

  const planet = showPlanet ? <RandomPlanet /> : null;

  return (
    <div>
      <Header />
      {planet}
      <input type='button' value='toggle planet' onClick={() => setShowPlanet(showPlanet => !showPlanet)} />
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
