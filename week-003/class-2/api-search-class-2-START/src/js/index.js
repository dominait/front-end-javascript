/* 
    MVC structure

    Model
    Controller (SearchView, ResultsView, Model)
    Views:
        - Search
        - Results
*/

import SearchController from "./controllers/search-controller";
import SwapiModel from "./models/swapi";
import ResultsView from "./views/results-view";
import SearchView from "./views/search-view";

const model = new SwapiModel();
const searchView = new SearchView("#search");
const resultsView = new ResultsView("#results");
const searchController = new SearchController(model, searchView, resultsView);
