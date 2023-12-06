import renderToDOM from '../../renderToDom';
import clearDom from '../../clearDom';

const addCardForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="language">Language</label>
        <input type="text" class="form-control" id="language" placeholder="Language" value="${obj.language || ''}" required>
      </div>
      <div class="form-group">
        <label for="title">description</label>
        <input type="text" class="form-control" id="description" placeholder="Description" value="${obj.description || ''}" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit Author</button>
    </form>`;

  renderToDOM('#form-container', domString);
};
export default addCardForm;
