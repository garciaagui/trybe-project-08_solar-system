import React from 'react';
import PropTypes from 'prop-types';

class FeatureCard extends React.Component {
  render() {
    const { content, name, icon } = this.props;
    return (
      <section className="container-feature-card">
        <img src={ icon } alt={ name } />
        <section>
          <span>{name}</span>
          <span>{content}</span>
        </section>
      </section>
    );
  }
}

FeatureCard.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default FeatureCard;
