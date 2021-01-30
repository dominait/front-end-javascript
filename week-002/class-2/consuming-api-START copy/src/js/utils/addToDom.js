function addToDom(selector, items){
    const location = document.querySelector(selector)
     
    items.forEach(item=>{
         location.appendChild(item)
    })
}

export default addToDom