import smash from '../../helpers/data/smash';
import './machine.scss';

const buildTheMachine = () => {
  smash.getCompleteMachine()
    .then((positions) => {
      positions.forEach(() => {});
      // build a domString
      // h2 that says VENDING MACHINE
      // div with an id = snack-section, class d-flex flex-wrap
      // forEach over positions - call a compenent called snacks
      // snacks component should return a bootstrap card
      // printToDom(stock, domString)
    })
    .catch((error) => console.error(error));
};

export default { buildTheMachine };
