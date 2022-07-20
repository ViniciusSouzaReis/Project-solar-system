import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import '../App.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div>
        <Title headline="Planetas" />
        <div data-testid="solar-system" className="solar">
          {planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
