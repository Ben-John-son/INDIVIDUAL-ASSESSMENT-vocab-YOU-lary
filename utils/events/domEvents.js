import { deleteCard, getCards, getSingleCard } from '../../api/cardData';
import { showCards } from '../../pages/showCard';
import addCardForm from './forms/addCardForm';
import { jsCard, cPlusCard, pythonCard } from './shared/filterBtnEvents';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE CARD', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');
        deleteCard(firebaseKey).then(() => {
          getCards(user.uid).then(showCards);
        });
      }
    }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-card-btn')) {
      addCardForm(user.uid);
    }
    // TODO: CLICK EVENT EDITING/UPDATING A BOOK
    if (e.target.id.includes('update-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((cardObj) => addCardForm(cardObj));
    }
    if (e.target.id.includes('javaScript')) {
      jsCard(user.uid).then(showCards);
    }
    if (e.target.id.includes('python')) {
      pythonCard(user.uid).then(showCards);
    }
    if (e.target.id.includes('cPlus')) {
      cPlusCard(user.uid).then(showCards);
    }
  });
};

export default domEvents;
