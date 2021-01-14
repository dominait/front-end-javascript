import {httpGetRequest} from './utils/fetch-api-data.js';
 import employeeView from './views/employeeView.js';
 import templateStringToElements from './utils/createElementFromTemplate.js'
 import addMarkupToPage from './utils/addMarkupToPage.js'
window.addEventListener('load', function(e) {

  // const button = document.querySelector('.one-by-one');
  // let addItemCount = 0

   httpGetRequest("https://reqres.in/api/users").then(result=>{
     const views= employeeView(result.data);
     const markup = templateStringToElements(views);
     const employeeList = addMarkupToPage('aside', 'employees', markup)
      document.querySelector('main').prepend(employeeList)
      // button.addEventListener('click', function(e){
      //   if(addItemCount <  markup.length)
      //  document.querySelector('.display').prepend(markup[addItemCount])
      //  addItemCount ++
      // })
   })
   
})