import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="mission-card" data-testid="mission-card">
        <p className="mission-name" data-testid="mission-name">
          { name }
        </p>
        <section className="mission-info">
          <p data-testid="mission-year">
            {`Ano: ${year}`}
          </p>
          <p data-testid="mission-country">
            {`País: ${country}`}
          </p>
          <p data-testid="mission-destination">
            {`Destino: ${destination}`}
          </p>
        </section>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
