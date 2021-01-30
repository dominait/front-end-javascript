import {getImagesRequest} from './fetch/get.js';
import {getRandomCatImages} from './controllers/cat-controller.js'
import {setCats} from './models/cats.js';

 window.addEventListener('load',(e) =>{
   const request = getImagesRequest("https://api.thecatapi.com/v1/images/search?limit=20")
    
   request.then(data =>{
      //save data to imported file
      setCats(data)
      console.log(getCats())

      // display module
      // const cats = getRandomCatImages()
      // const catDisplay = document.querySelector('.cat-display');
      // cats.forEach(item=>{
      //    catDisplay.append(item)
      // })

      //build UI with data object...
   })


    
 })