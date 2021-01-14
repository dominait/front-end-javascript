import axios from './../../../node_modules/axios/dist/axios.js'
 
  
  function httpGetRequest  ()  {
   const requestData = axios.get('https://reqres.in/api/users')
        .then(response => {
            return response.data.data;
        })
        .catch(error => console.error(error));
        return requestData
};


export {httpGetRequest}
 