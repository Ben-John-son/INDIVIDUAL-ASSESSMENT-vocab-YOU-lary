import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/sample_data/clearDom';

const showCards = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-card-btn">Add A Card</button>';

  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.language}${item.description}</h6>
        <hr>
        <i class="btn btn-success fas fa-eye" id="view-card-btn--${item.firebaseKey}"></i>
      
        <i class="fas fa-edit btn btn-info" id="update-card-btn--${item.firebaseKey}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-card-btn--${item.firebaseKey}"></i>
      </div>
    </div>`;
  });
  renderToDOM('#store', domString);
};
export default showCards;
