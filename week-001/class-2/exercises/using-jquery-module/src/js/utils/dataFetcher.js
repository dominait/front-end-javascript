import $, { data } from 'jquery'
 
  
  function httpGetRequest  ()  {
   
 let result
 

   result = $.getJSON("https://reqres.in/api/users",function(data){
     return data 
   } )
 

   return result;
      
};
 
export {httpGetRequest}
 