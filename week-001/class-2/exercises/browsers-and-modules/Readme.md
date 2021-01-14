# Browsers And Modules
When you want to use external npm modules in your code you will need to use a bundler tool. We are using the zero config bundler called parcel. In the begining of your js journey into the new world of javascript you want to keep out of the way of having to configure projects and learn how to code projects. I encourage you not to get hung up in the details. Get your code workflow down, learn how to build using the tech stack of your choice. Once that is accomplished you can then go back and get into the heavier details

### The Browser and ES Modules
The browser can understand your modules by default as long as you include the _type=module_ attribute in your html script tag.
```html
  <script  type="module" src="js/index.js"  ></script>
```

### The Browser and NPM Modules
When you import modules from the node_modules directory the browser has no idea how to handle them. You need to give the browser some help. We use the parcel bundler to give the browser the help it needs. Parcel takes your modules and the npm modules and bundles the javascript into a single javascript file the browser can understand.


## Exercise
I want you to install axios using npm. Axios is a popular javascript library for making asynchronus HTTP requests. Similar to the Fetch API. I also want you to install parcel.  
__Install Modules__
```
npm install axios
npm install -D parcel
```  
__Add Scripts To package.json__  
:warning: Watch when you copy and paste json data that the conversion doesn't change the type of quotes most often happens with rich text editors and html documents.
```json
 "dev": "parcel src/index.html",
 "build": "parcel build index.html"
```

__Script The  DataFetcher ES6 Modules__  
Create a module called dataFetcher.js inside the `js/utils` folder. Your going to import the axios library that you installed via  ```npm install axios``` and then make a HTTP GET request for some json data the url is provided. Note that we are createing a variable to hold a reference to the axios request. This returns a promise immediatly to the method call. The method call that you write must listen for the promise and wait for the data to be returned.
```js
import axios from 'axios'
 
  
  function httpGetRequest  ()  {
   const requestData = axios.get('https://reqres.in/api/users')
        .then(response => {
            return response.data.data;
        })
        .catch(error => console.error(error));
        return requestData
};


export {httpGetRequest}

```


__Import the dataFetcher ES6 Modules__  
Because we exported the modules we have to use the {} to import it. I am using the load event that will then call the httpGetRequest. Here we have wait for the response using a promise.

```js
import {httpGetRequest} from './utils/dataFetcher.js'

window.addEventListener('load', function(e) {
    httpGetRequest().then(data=>console.log(data))

})
```

__Open The Project In Live Server__  
Using VSCode open the projects index.html document lin live server. If you dont have the extension installed you will need to install it from the extensions menu. Your going to see an error. The line number maybe different but the browser is telling you that it has no idea how to get axios or what it is.  

#### :triangular_flag_on_post: Uncaught TypeError:
```js
 Failed to resolve module specifier "axios". Relative references must start with either "/", "./", or "../".
```  
__Why Is This Happening__   
The browser doesn't know what NPM modules are. It doesent know how to import them it doesn't even know about the node modules directory. Even if you pathed to the node_modules directory and added the path to axios the browser would say mmmmmm nope still don't get it. Don't believe me try it.
```js
// change the import
import axios from 'axios'
//to
import axios from './../../../node_modules/axios/dist/axios.js'
```   
#### :triangular_flag_on_post: Uncaught SyntaxError:
The browser doesn't see an export or default export called axios in the axios.js file. Go to the node_modules director find the axios.js file and see how axios is exorted.
```js
 The requested module './../../../node_modules/axios/dist/axios.js' does not provide an export named 'default'
```

### module.exports  
If you followed the trail you found the statement module.exports. Again what is going on. NPM is for install node modules. Node modules are written in javascript but they use a differenct syntax to export moudles and that is ```module.exports```. This type of module is common.js module. ES6 Modules are not compatible with each other. The browser doesn't know how to use common.js modules it only knows how to use ES6 Modules. So how can we use all the wonderfull javascript goodness that npm provides via the package manager. Read on....

### Bundle It  
Solution you need a module bundler. That is why we have to use parcel. If you want to use the goodness of npm you must bundle your javascript and the node modules you use in your project into a single bundled javascript file that the browser can understand.

### Run Parcel
Now run the command npm run dev. This will start parcel and parcel will run through all the files that are attached to your index.html document img, css via link tag and your script tag. Parcel will look at your js code and when it sees import statements it will follow the trails and import and transpile the code to vanilla js. Without parcel we couldn't use node modules in our projects. The whole process uses a tool called Babel under the hood to transpile or convert your code minify it and optimize it for production.








`Pre Flight Check List`  
- github desktop installed [download](https://desktop.github.com/)
- git installed [download](https://git-scm.com/)
- github account created [signup](https://github.com)
- visual studio code installed


`Video Demonstration`
Follow along and use github desktop to build a test repo then delete the remote and local repos and do it all over again.

[Watch Demo]()


 
 

`Resources` 

__Difference Between Fetch and Axios__
Fetch sends data in the message body.  
Axios uses the data property to send data.  
The data in fetch() is stringified.  
The URL is passed as an argument in Fetch.  
Axios passes the URL as an options to the objectAPI
