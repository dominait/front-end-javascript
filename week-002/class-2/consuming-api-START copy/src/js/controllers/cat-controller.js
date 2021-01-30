import catView from '../views/cat-view.js'
import {getCats,setCats, updateCats} from '../models/cat-modle.js'
import stringToElement from '../utils/stringToElement.js'
import generateMarkup from '../utils/generateMarkup.js'
function createCatView (data){
    // is view created?
     setCats(data);
    const items = createElements(data);
    return createElements(data);
}

function createElements(cats){
    let items = []
    cats.forEach(cat=>{
     //const element = stringToElement(view)
     // use templating engine way easier EJS
     // add template data
      const template = generateMarkup(catView, cat)
      const element = stringToElement(template)
 
       items.push(element)
      

    })
    return items

}

export {createCatView}