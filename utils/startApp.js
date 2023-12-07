import { getCards } from '../api/cardData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../pages/shared/domBuilder';
import { showCards } from '../pages/showCard';
import domEvents from './events/domEvents';
import formEvents from './events/forms/formEvents';
import navigationEvents from './events/navigationEvents';
import navBar from './events/shared/navBar';

const startApp = (user) => {
  domBuilder();
  domEvents(user);
  formEvents(user);
  navBar();
  logoutButton();
  navigationEvents(user);
  getCards(user.uid).then((cards) => showCards(cards));
};
export default startApp;
