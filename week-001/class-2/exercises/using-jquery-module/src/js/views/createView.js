import $ from 'jquery';

 


function createView(users){
 
 

     let $container = $("<div></div>")
 
  


   
    const dataItemMarkup = []
    $.each(users.data, function(index, user){
     let $para = $("<figure>").append("<img><figcaption><ul><li></li><li></li></ul>") 
     $para.find('img').attr("src", user.avatar)
     $para.find('li:first-child').text(`${user.first_name} ${user.last_name}`)
     $para.find('li:last-child').text( user.email)
     $container.append($para)

     
    })
   
    return $container

    //$('body').prepend($container)
   
}

export {createView}
