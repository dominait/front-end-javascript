// ejs templating to create the view
 
const catView = `
   <aside class="cat-view">
    <img src="<%= data.url %>" alt="random cat images"/>
   </aside>
`

export default catView