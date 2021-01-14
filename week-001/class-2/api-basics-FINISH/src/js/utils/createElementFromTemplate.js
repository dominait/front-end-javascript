function templateStringToElements(template = []) {
  let elements;
  if(template.length === 0 ){
    throw  new Error("\nyou must pass an array of template literals containing valid HTML5") 
  }

  elements = template.map((string) => {
    const element = document.createRange().createContextualFragment(string).children[0];
    return element;
  });

  console.log(elements);

  return elements;
}

export default templateStringToElements;
