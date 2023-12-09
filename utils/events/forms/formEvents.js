import { createCard, getCards, updateCard } from '../../../api/cardData';
import { showCards } from '../../../pages/showCard';
import timeStamp from '../../time';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-card')) {
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        language: document.querySelector('#language').value,
        uid: user.uid,
        time: timeStamp
      };
      createCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateCard(patchPayload).then(() => {
          getCards(user.uid).then(showCards);
        });
      });
    }
    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        language: document.querySelector('#language').value,
        firebaseKey,
        time: timeStamp
      };

      updateCard(payload).then(() => {
        getCards(user.uid).then(showCards);
      });
    }
  });
};
export default formEvents;
