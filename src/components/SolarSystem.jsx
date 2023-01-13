import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const { changePlanet } = this.props;
    return (
      <div className="container-solar-system" data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((planet) => (<PlanetCard
          key={ planet.name }
          planetName={ planet.name }
          planetImage={ planet.image }
          changePlanet={ changePlanet }
        />))}
      </div>
    );
  }
}

SolarSystem.propTypes = {
  changePlanet: PropTypes.func.isRequired,
};

export default SolarSystem;
