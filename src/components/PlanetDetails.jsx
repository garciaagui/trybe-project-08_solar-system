import React from 'react';
import PropTypes from 'prop-types';
import planets from '../data/planets';
import Missions from './Missions';
import { featuresNames, featuresIcons } from '../data/features';
import FeatureCard from './FeatureCard';

class PlanetDetails extends React.Component {
  render() {
    const { currPlanet } = this.props;
    const currPlanetInfo = planets.find(({ name }) => name === currPlanet);
    const { day, year, diameter, sunDistance, planetType, moons } = currPlanetInfo;

    const features = [day, year, diameter, sunDistance, planetType, moons];

    console.log(features);

    return (
      <section className="container-planet-details">
        <h2>{currPlanetInfo.name}</h2>
        <section className="container-img-features">
          <img
            src={ currPlanetInfo.image }
            alt={ currPlanetInfo.name }
          />
          <section className="container-features">
            {features.map((feature, index) => (<FeatureCard
              key={ featuresNames[index] }
              content={ feature }
              name={ featuresNames[index] }
              icon={ featuresIcons[index] }
            />))}
            {/* <section className="container-feature-card">
              <span>Length of day</span>
              <span>{currPlanetInfo.day}</span>
            </section>
            <section className="container-feature-card">
              <span>Length of year</span>
              <span>{currPlanetInfo.year}</span>
            </section>
            <section className="container-feature-card">
              <span>Diameter</span>
              <span>{currPlanetInfo.diameter}</span>
            </section>
            <section className="container-feature-card">
              <span>Distance from sun</span>
              <span>{currPlanetInfo.sunDistance}</span>
            </section>
            <section className="container-feature-card">
              <span>Planet Type</span>
              <span>{currPlanetInfo.planetType}</span>
            </section>
            <section className="container-feature-card">
              <span>Moons</span>
              <span>{currPlanetInfo.moons}</span>
            </section> */}
          </section>
        </section>
        <p>{currPlanetInfo.overview}</p>
        <Missions currPlanet={ currPlanet } />
      </section>
    );
  }
}

PlanetDetails.propTypes = {
  currPlanet: PropTypes.string.isRequired,
};

export default PlanetDetails;
