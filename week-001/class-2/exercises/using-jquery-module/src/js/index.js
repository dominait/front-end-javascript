import {httpGetRequest} from './utils/dataFetcher.js';
import {createView} from './views/createView.js';
import $ from 'jquery'

window.addEventListener('load', function(e) {
   
    httpGetRequest().done(data=>{
      let $markup = createView(data)
      $('.display').append($markup)
      
     })

})