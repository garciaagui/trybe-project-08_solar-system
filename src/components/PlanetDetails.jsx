import React from 'react';
import PropTypes from 'prop-types';
import planets from '../data/planets';
import Missions from './Missions';

class PlanetDetails extends React.Component {
  render() {
    const { currPlanet } = this.props;
    const currPlanetInfo = planets.find(({ name }) => name === currPlanet);
    return (
      <section>
        <h2>{currPlanetInfo.name}</h2>
        <p>{currPlanetInfo.overview}</p>
        <span>{`Length of day: ${currPlanetInfo.day}`}</span>
        <span>{`Length of year: ${currPlanetInfo.year}`}</span>
        <span>{`Diameter: ${currPlanetInfo.diameter}`}</span>
        <span>{`Distance from sun: ${currPlanetInfo.sunDistance}`}</span>
        <span>{`Planet Type: ${currPlanetInfo.planetType}`}</span>
        <span>{`Moons: ${currPlanetInfo.moons}`}</span>
        <img
          src={ currPlanetInfo.image }
          alt={ currPlanetInfo.name }
        />
        <Missions currPlanet={ currPlanet } />
      </section>
    );
  }
}

PlanetDetails.propTypes = {
  currPlanet: PropTypes.string.isRequired,
};

export default PlanetDetails;
