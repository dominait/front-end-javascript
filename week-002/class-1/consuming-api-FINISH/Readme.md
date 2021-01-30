# REST API  
An API (Application Programming Interface) is a set of functions that allows applications to access data and interact with external software components, operating systems, or microservices. To simplify, an API delivers a user response to a system and sends the system's response back to a user.

### Why We Use REST API
Data Access:  
  

Functionality:


### HTTP Request Messages
__Start Line__  
Contains http request method, target url, http version. The start line is followed by a empty line to seperate it from the header and body of the HTTP message. 
  
#### Headers   
__General Headers__  
General headers are used in the request and response cycle with no relation to the data transmitted.  

__Request Headers__  
Request headers contain more information about the resource to be fetched and the client making the requesting for the  resource.  

__Response Headers__  
Response Headers hold information about the response made from the server.  

__Content Headers__  
Content headers or the message body contain information about the resource such as the content length or content type.  

  
#### Body  
The body is the information sent by the request or the response.  

  
### HTTP Methods 
Basic CRUD application uses create read update and the delete methods. There are many more methods. If your using postman use the dropdown menu to see a list of all of the possible HTTP Request Methods.  

GET Request  
PUT Request  
POST Request  
DELETE Request  

### What Are Query Parameters

### Signing Up For API
Some are free some are paid
Some use api key
__Accessing Cat API__
You need an api key to access the cat api. There are two methods that you can use to connect to the cat api. 

_Using Query Params_ 
This is one form of that creators of an api will have you authenticate as a user of the api. Using a key send as a query parameter sent along with the get request. 
`https://thecatapi.com/v1/images?api_key=YOUR KEY HERE`


### Analysing API using postman
- creating requests in postman
- saving querys in postman
- getting code for the request
- return panel.
- types of requests you can make.

### Creating Get Request in the Client
- sending get request
- sending get request with api key

- sending get request with a custom header
- sending get request with query params
- query params in the client.
- creating a requestObject
- creating a header
- creating a request header name value pair


### Resources
[free api resources](https://github.com/public-apis/public-apis#jobs)
[MDN HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)




