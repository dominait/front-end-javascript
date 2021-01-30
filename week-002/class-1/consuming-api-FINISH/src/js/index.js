 

import { getRequest } from "./utils/dataFetcher.js";
import {createCatView} from "./controllers/cat-controller.js";
import addToDom from './utils/addToDom.js'
/* 
 App Start Up 
   1 Get data needed for initial display
      - save data as models on the client
      - try to minmize number of request wherever possible
      - caching requests
   2 Create the views required for initial display
      - nav
      - page header
      - main content body
   3 Add views to display
*/

 

window.addEventListener("load", function (e) {
   





  document
    .querySelector("#makeRequest")
    .addEventListener("click", function (e) {
      // get data
      const dataRequest = getRequest(
        "https://api.thecatapi.com/v1/images/search?limit=20&page=2"
      );
      // listen for the data return before proceeding
      dataRequest.then((result) => {
       const cats = createCatView(result) 
       addToDom('.cat-display', cats)
              
      });
    });
});
