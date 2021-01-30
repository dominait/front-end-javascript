function SearchView(viewId){
     // initial setup
     this.view = document.querySelector(viewId);
     // setup with the controller
   
     
     this.updateLabel= function(label){
          // assign the new label
          this.view.querySelector('label[for=searchTerm]').textContent = label
       
     }
     
     
  
     return this
}


export default SearchView 