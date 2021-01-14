### Checking Paint Flash and Layout Shift
Below is the code to add to the employee example to add employees one by one.
```js
 const button = document.querySelector('.one-by-one');
  let addItemCount = 0


 button.addEventListener('click', function(e){
       if(addItemCount <  markup.length)
      document.querySelector('.display').prepend(markup[addItemCount])
      addItemCount ++
     })
```  
### Console Error parcelRequire is not defined.
Parcel.js uses an implicit variable declaration for parcel require. To get rid of the error you see in the console just put let in front of the following line of code.
```js
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
```  
### Parcel Error In Console Fix
Search your bundled js file for parcelRequre and put let infront of parcelRequire =
```js
let parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {

```