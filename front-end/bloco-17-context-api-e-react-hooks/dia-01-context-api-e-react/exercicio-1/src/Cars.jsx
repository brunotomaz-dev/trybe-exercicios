// src/Cars.jsx

// import PropTypes from 'prop-types';
import React from 'react';
import contextCreator from './context/contextCreator';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

class Cars extends React.Component {
  render() {
    const { cars: {red :redCar, blue: blueCar, yellow: yellowCar}, moveCar } = this.context;
    return (
      <div>
        <div>
          <img
            className={redCar ? 'car-right' : 'car-left'}
            src={carRed}
            alt='red car'
          />
          <button onClick={() => moveCar('red', !redCar)} type='button'>
            Move
          </button>
        </div>
        <div>
          <img
            className={blueCar ? 'car-right' : 'car-left'}
            src={carBlue}
            alt='blue car'
          />
          <button onClick={() => moveCar('blue', !blueCar)} type='button'>
            Move
          </button>
        </div>
        <div>
          <img
            className={yellowCar ? 'car-right' : 'car-left'}
            src={carYellow}
            alt='yellow car'
          />
          <button onClick={() => moveCar('yellow', !yellowCar)} type='button'>
            Move
          </button>
        </div>
      </div>
    );
  }
}

Cars.contextType = contextCreator;

// Cars.propTypes = {
  // moveCar: PropTypes.func.isRequired,
  // blueCar: PropTypes.bool.isRequired,
  // redCar: PropTypes.bool.isRequired,
  // yellowCar: PropTypes.bool.isRequired,
// };


// const mapStateToProps = (state) => ({
//   redCar: state.cars.red,
//   blueCar: state.cars.blue,
//   yellowCar: state.cars.yellow});

// const mapDispatchToProps = { moveCar };

// export default connect(mapStateToProps, mapDispatchToProps)(Cars);
export default Cars;
