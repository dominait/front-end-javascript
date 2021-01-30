//all get requests

//api key for header
const aheader = new Headers()
aheader.append('x-api-key', '9346cac2-2ca0-49a5-8c47-d798f42388fd')

/*
@function: getimagerequest
@params: url: api param url string
@description: send through a request to retrieve the required data from the api object 
*/
function getImagesRequest(url){
   
    //create custom header to pass with URL
  
    const requestObject = {
        method: 'GET',
        headers: aheader,
        redirect: 'follow'
        //body: {some data}
    };
    
   const result = fetch(url, requestObject)
    .then(response => response.json()) //get response from API
    .then(data => data) // get data from response from API


    return result;
}

function getBreedsRequest(){
    return "get Breeds Request";
}

 

export {getImagesRequest,  getBreedsRequest}
 
 