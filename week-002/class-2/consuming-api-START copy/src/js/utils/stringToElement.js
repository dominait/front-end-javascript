function stringToElement(item){
   const element = document.createRange().createContextualFragment(item).children[0] 
   // check to see if return value is element node before returning.
   // throw new error
 
   return element
}

export default stringToElement