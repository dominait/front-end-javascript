 import SwapiModel  from './models/swapi'
import SearchView from './views/search-view'
import SearchController from './controllers/search-controller'
import ResultsView from './views/results-view'
 
(function(){
      //const model = new SwapiModel()
      const model = new SwapiModel()
      const searchView = new SearchView('#search')
      const resultsView = new ResultsView('#results')
      const controller = new SearchController(model, searchView, resultsView);
      controller.configUI()
 })()