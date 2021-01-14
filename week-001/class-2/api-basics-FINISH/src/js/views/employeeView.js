 
 


function employeeView(employees){
 
 const templateMarkup = employees.map((user,index)=>{
       const template = `<figure>
       <img src="${user.avatar}" alt="" width="140" height="140" loading="lazy">  
       <figcaption>
         <ul>
           <li>${user.first_name} ${user.last_name}</li>
           <li>${user.email}</li>
         </ul>
       </figcaption>
     </figure>`
     return template
  })

  return templateMarkup
}

export default employeeView 
