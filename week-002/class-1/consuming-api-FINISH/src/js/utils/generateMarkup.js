import ejs from 'ejs'

function generateMarkup(template, data){
   return ejs.render(template, {url:data.url})
}

export default generateMarkup 