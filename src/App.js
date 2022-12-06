import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currPlanet: '',
    };
  }

  changePlanet = (planetName) => {
    this.setState({
      currPlanet: planetName,
    });
  }

  render() {
    const { currPlanet } = this.state;

    return (
      <main>
        <Header />
        <SolarSystem
          changePlanet={ this.changePlanet }
        />
        {currPlanet === ''
          ? <p>CLIQUE EM UM PLANETA PARA MAIS INFORMAÇÕES</p>
          : <Missions currPlanet={ currPlanet } />}
      </main>
    );
  }
}

export default App;
