# Connecting To An API


# Application Design  
It's worth taking a look at some web application architecture. I am including a few links on the subject for you to read. It's a good idea to have a general understanding of how a single page web app is built. Also how a PWA is build. We should also know the difference between Server Side Rendered Pages and Staticlly Generated Pages. We will get to these topics later in the course.

- [Front End PRPL Pattern](https://web.dev/apply-instant-loading-with-prpl/)
- [App Shell Modal Single Page Application](https://developers.google.com/web/fundamentals/architecture/app-shell)
- [Progressive Web App Architecture](https://developers.google.com/web/ilt/pwa/introduction-to-progressive-web-app-architectures)
- [web dev](https://web.dev/)

## Do You Know What Your Biggest Problem Is?
Yup images they will be the bain of your existance. Basically compress the ^%*#*() out of them. Use an image service like Cloudinary or take control of the images yourself and use a compression tool like Squoosh.
### Image Compression
- [Squoosh](https://web.dev/squoosh-v2/)
- [image lazy loading](https://web.dev/lazy-loading/)  

### CSS To The Rescue  
Make sure you keep on top of your css for front end development. It's moving quickley. Google support the content-visibility property and you can use it now. This will give you an instant performance boost for clients viewing your projects on Chrome browsers.
- [CSS property content-visibility](https://web.dev/content-visibility/)


## Do Yourself A Favour
Use the dev tools there is a reason why there in the browser. Monitor you builds using the various tools provided to you.

## Check Render Performance
-  animation 
-  rendering
 

## Check JavScript Performance
- javascript profiler
- paint flash
- layout shift

## Check Network Performance
- performance monitor
- paint flash
- layout shift

## Run A Lighthouse Audit
- performance monitor
- paint flash
- layout shift



## Connect Using Fetch


## Using Promises


## Creating Data Fetcher Module


## Creating A Display Module
- various techniques I personally create a view with template literal build the dom node and add it to an array
- then build a container add the node elements to the container
- add the container to the DOM

## Presenting Data
- try to add all content at once and not a piece at a time.



## API Performance Monitoring
[AP Performance Testing Google](https://web.dev/custom-metrics/?utm_source=devtools#server-timing-api)



 