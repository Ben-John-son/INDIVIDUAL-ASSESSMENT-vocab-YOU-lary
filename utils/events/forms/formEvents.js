import { createCard, getCards, updateCard } from '../../../api/cardData';
import showCards from '../../../pages/showCard';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-card')) {
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        language: document.querySelector('#language').value,
        uid: user.uid
      };
      createCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateCard(patchPayload).then(() => {
          getCards(user.uid).then(showCards);
        });
      });
    }
    // TODO: CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        language: document.querySelector('#language').value,
        firebaseKey,
      };

      updateCard(payload).then(() => {
        getCards(user.uid).then(showCards);
      });
    }
  });
};
export default formEvents;
