import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    const { currPlanet } = this.props;
    const renderArr = missions.filter((e) => e.destination === currPlanet);
    return (
      <div className="container-missions" data-testid="missions">
        <Title headline="Missões" />
        {renderArr.length
          ? (
            renderArr.map((mission) => (<MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />))
          )
          : 'NO MISSIONS FOUND'}
      </div>
    );
  }
}

Missions.propTypes = {
  currPlanet: PropTypes.string.isRequired,
};

export default Missions;
