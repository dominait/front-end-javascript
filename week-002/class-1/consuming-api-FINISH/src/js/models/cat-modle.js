let store =[]
let once;
 
// you can't do this with arrow functions
// arrow functions can't use the new key word.

function setCats(data){
    if(once === undefined){
       store = [...data]
       once = true;
   }
}

function updateCats(data){
    once = undefined;
    setCats(data)
}
 
 function getCats(){
     return store
 }




// function Cats () {
    
//    let once = true;
//    this.setCats = (data) => {
//        if(once === true){
//            once = false;
//            store=[...store, ...data]
//        }
//    }
//    this.getCats = () => {
//        return  store;
//    };
 
   
// }

 

// const cats = {
//     setCats: (data)=> store = [...data],
//     getCats: ()=> store,
// }

 
export {getCats, setCats, updateCats}