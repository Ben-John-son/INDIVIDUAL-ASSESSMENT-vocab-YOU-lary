import { getCards } from '../../api/cardData';
import { showCards } from '../../pages/showCard';
import { signOut } from '../auth';

const navigationEvents = (user) => {
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#all-cards').addEventListener('click', () => {
    getCards(user.uid).then(showCards);
  });
};

export default navigationEvents;
