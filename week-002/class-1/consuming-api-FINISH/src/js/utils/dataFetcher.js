
function getRequest(url){
  return    fetch(url, requestOptions)
  .then(res=> res.json())
  .then(result=> result)
}

export {getRequest}