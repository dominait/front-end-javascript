// storing the cat data 
let catstorage = []
let once; //no value - undefined

function setCats(data){
    if(once === undefined){
        catstorage = [...data]
        once = true;
    }
}

function updateCats(data){
    once = undefined;
    setCats(data);
}

//using map, filter, reduce - not to mutate the origional data
function getCats(){
    return catstorage;
}

export {setCats, getCats, updateCats};

 


  /* 
  objects
    Most Data in Javascript object 
  */

 


 

