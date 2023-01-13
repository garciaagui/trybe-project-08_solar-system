import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, changePlanet } = this.props;
    const imgAlt = `Planeta ${planetName}`;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">
          { planetName }
        </p>

        <button
          type="button"
          onClick={ () => { changePlanet(planetName); } }
        >
          <img
            src={ planetImage }
            alt={ imgAlt }
          />
        </button>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
  changePlanet: PropTypes.func.isRequired,
};

export default PlanetCard;
