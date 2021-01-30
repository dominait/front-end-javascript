
function SwapiModel(){
   this.apiBaseUrl = 'https://swapi.dev/api/'
 

   this.init = function () {
    const result = this.query('https://swapi.dev/api/people?search=luke').then(res=> res)
    return result
   }

   this.query= async function(url){
      const req = await fetch(url);
      const res = await req.json();
      return res
   }

   this.search = async function (formObj){
      const {category, name} = {...formObj}
      let url = new URL( this.apiBaseUrl + category +  '?')
      // console.log(url.search url must have name=jim&age=3&another=3)
     
     // create search params for the url
     const params = new URLSearchParams()
     params.set('search', name)
     url =url+params 
     console.log(url)
   // fetcg the data
     const req = await fetch(url);
      const res = await req.json();
    
      return res
   
        
   }

   

   return this
}


export default SwapiModel 