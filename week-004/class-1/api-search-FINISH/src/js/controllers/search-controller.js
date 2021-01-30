function SearchController (model, searchView, resultsView){
    // tell the search view about the model
    this.model = model;
    this.searchView = searchView;
    this.searchView.setController(this);
    this.category = 'people'
   
    //config listeners
    this.configListeners =  () => {
       this.searchView.view.addEventListener("submit", this.onHandleSubmit)
       const radios =  this.searchView.view.querySelectorAll('input[type=radio]')
       radios.forEach(radio=>{
           radio.addEventListener('change',this.onCheckedHanlder)
       })
    
    }
    // config the initial ui from data
    this.configUI = async function(){
         const data = await model.init();     
         resultsView.configUI(data.results[0]);
    }
    // radio button change handler
    this.onCheckedHanlder =  (e) =>   {
        this.category = e.currentTarget.value;
        console.log(this.category)
       this.searchView.updateLabel(this.category)
    }

   // form submit button handler
   this.onHandleSubmit = async (e)=> {
       e.preventDefault();
       // skipping over validation
       const queryParams = {
           category:this.category,
           name:e.currentTarget.searchTerm.value
       }

      const searchResponse = await this.model.search(queryParams)

    //   switch(this.category){
    //       case 'people': console.log("do the people thing");
    //       case 'species': console.log('do the species thing')

    //   }
      resultsView.renderPeople(searchResponse)
   }

  
   this.configListeners();
  
    return this;
}

export default SearchController