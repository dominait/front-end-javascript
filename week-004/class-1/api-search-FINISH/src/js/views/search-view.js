function SearchView(viewId){

     this.searchController;
     this.view = document.querySelector(viewId);

     this.setController = function(controller){
          this.searchController= controller;         
     }
     
     this.updateLabel= function(label){
          // assign the new label
          this.view.querySelector('label[for=searchTerm]').textContent = label
       
     }
     
     
  
     return this
}


export default SearchView 