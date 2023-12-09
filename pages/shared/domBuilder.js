import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="add-button"></div>
    <div id="filterBtns">
    <button type="button" id="javaScript" class="btn btn-primary">JavaScript</button>
    <button type="button" id="python" class="btn btn-primary">Python</button>
    <button type="button" id="cPlus" class="btn btn-primary">C++</button>
    </div>
    <div id="form-container"></div>
    <div id="store"></div>
    <div id="view"></div>
  </div>`;

  renderToDOM('#app', domString);
};
export default domBuilder;
