function SearchView(viewId) {
  // pass in the id of the view
  this.view = document.querySelector(viewId);

  this.configUI = function () {};

  this.updateLabel = function (label) {
    // update the label when the radio button changes
  };

  return this;
}

export default SearchView;
