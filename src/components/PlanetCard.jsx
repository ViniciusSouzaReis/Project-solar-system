import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const string = `Planeta ${planetName}`;
    const planetCardClass = 'planetas';
    return (
      <div data-testid="planet-card" className={ planetCardClass }>
        <p data-testid="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ string } className={ planetName } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
