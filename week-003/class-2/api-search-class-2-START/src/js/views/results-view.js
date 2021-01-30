import ejs from "ejs";

const personView = `
<aside class="person">
  <header><h3 class="name"> <%= person.name %></h3></header>
   
  <ul class="details" >
  <li> height: <span><%= person.height %>cm</span></li>
  <li> weight:<span><%= person.mass %>Kg</span></li>
  <li>hair color: <span><%= person.hair_color %></span></li>
  </ul>

</aside>
`;

const noResultsView = `
<aside class="error">
  <header>
    <h3> There are no results matching this search</h3>
 <header>
</aside>
`;

function ResultsView(viewId) {
  this.container = document.querySelector(viewId);

  this.configUI = function (person) {
    const elem = ejs.render(personView, { person });
    this.container.insertAdjacentHTML("afterbegin", elem);
  };
}

export default ResultsView;
