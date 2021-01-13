# Front End JavaScript
## Using The VSCode Terminal
 

__Terminal Commands__  
You need to be comfortable working with the VSCode terminal. Below you will find a list of common terminal commands that you will need for the course. Practice using these commands to build a basic file structure add and remove files and folder as well as moving and copying files and folder.
 
| command   |      description                                                            | example |    
|-----------|:----------------------------------------------------------------------------|-------------------------------------------| 
|pwd        |  gives you a listing of the current working directory                        | pwd                                      |       
|ls         |  directory listing                                                           | ls -lah                                  |
|cd         |  used along with directory path to navigate the direcotry  s                 | cd src/js                                |           
|clear     |  clear the console                                                            | clear                                    |          
|CTRL+C    |  escape to new prompt                                                         |                                          | 
|touch     |  Mac create a new file                                                        | touch  src/index.html  src/css/forms.css |
|New Item  |  Win create a new file                                                        | New Item newfile.txt                     | 
|mkdir     |  create a new directory                                                       | mkdir src/js src/css src/img src/js/forms|
|rm -rf    |  remove a direcotry                                                           | rm -rf src/js/forms                      |
|rm        |  remove a file                                                                | rm src/css/forms.css                     |
|cp        |  copy command                                                                 | cp src/css/styles.css src/css/reboot.css | 
|mv        |  move command                                                                 | mv src/index.html src/pages/contacts.html| 


__Exercise 1__ 
Open the VSCode terminal and at the command prompt type. Its important to know where you are in your file strucutre before you enter a command. If your new to the terminal type pwd and then enter.  You should see the full path to the current directory.
```
prompt > pwd
```  
<br/> 
__Exercise 2__  
Make a directory src. Once you have made the directory add a js folder to the src folder. Once you have done that make a directory inside the src folder called css.
```
prompt > mkdir src
```  

```
prompt > mkdir src/js
```  
<br/>  

__Exercise 3__ 
Make a file called index.js inside the js folder. You will use touch if your using a Mac and New Item if your using a Windows. Once you have done this make a file inside the src/css folder called styles.css. Remove the src directory
```
prompt > touch src/js/index.js
```
```
prompt > mkdir src/css/styles.css
```
```
prompt > rm -rf src
```
<br/> 

__Exercise 4__   
Make a directory called src folder that includes the follwing folders css js data plus an img folder 
```
prompt > mkdir src  src/js src/css src/data src/img
```
<br/> 

__Exercise 5__   
Create the following three files in the src/css folder   styles.css index.html and index.js 
```
prompt > touch src/css/styles.css src/css/index.html src/css/index.js
```
<br/> 
__Exercise 6__   
Move index.js to the src/js folder
```
prompt > mv src/css/index.js  src/js/
```
<br/> 

__Exercise 7__   
Move index.html file up one directory 
```
prompt > mv src/css/index.html  src
```

<br/> 

__Exercise 8__   
List the files inside the js folder
```
prompt > ls src/js
```
<br/> 

__Exercise 9__   
Remove the src/css styles.css file
```
prompt > rm src/css/styles.css
```
<br/> 

__Exercise 10__   
Remove the src directory
```
prompt > rm -rf src
```


 