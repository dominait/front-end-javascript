 
  
function httpGetRequest  (url)  {
  const requestData =  fetch(url)
    .then(res=>res.json())
    .then(result=> result)

    return requestData
};

 
 
export {httpGetRequest}

 