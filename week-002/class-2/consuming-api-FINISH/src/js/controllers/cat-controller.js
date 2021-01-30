import ejs from 'ejs';

import catView from '../views/cat-view.js'
import {getCats} from "../models/cats.js"

function getRandomCatImages(){
    // view
   
    const data = getCats();
 
    // COMBINING DATA & Template
    const templates = data.map(item=>{
        const template = ejs.render(catView, {data:item})
        
    //     const template = `<aside class="cat-view">
    //     <img src="${item.url}" alt="random cat image"/>
    //    </aside>`
    //    // dont convert to a elem  insert DOM   adjacentHTML('beforeend', string)
    //    // interactivity convert the templates to element nodes.
    //    // conversion to elements
    //    // module  createsElement(templ) returns array
       const elem = document.createRange().createContextualFragment(template).children[0]
    //    // add the events the elem
        return elem
    })

  

    return templates
}

export {getRandomCatImages}