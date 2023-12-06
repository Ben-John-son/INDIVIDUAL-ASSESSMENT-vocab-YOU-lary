import { getCards } from '../api/cardData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../pages/shared/domBuilder';
import showCards from '../pages/showCard';
import domEvents from './events/domEvents';
import formEvents from './events/forms/formEvents';

const startApp = (user) => {
  domBuilder(); // BUILD THE DOM
  domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  getCards(user.uid).then((cards) => showCards(cards));
  // TODO: Put all books on the DOM on App load
};
export default startApp;
