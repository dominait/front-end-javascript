# Using The Node Package Manager


### Initialize a Project
The `npm init` command runs the setup tool for a project that you are going to use with the npm package manager. It will prompt you for input for a few aspects of the project in the following order:  
- The project's name,
- The project's initial version,
- The project's description,
- The project's entry point (meaning the project's main file),
- The project's test command (to trigger testing with something like Standard)
- The project's git repository (where the project source can be found)
- The project's keywords (basically, tags related to the project)
- The project's license (this defaults to ISC - most open-source projects are MIT)  
  
__Using npm init__  
Enter the npm init command in the VSCode terminal window  
 
```npm init # This will trigger the initialization process```

<br/>

__Using npm init -y__   
Using the npm init -y command will instantly initialize a project  
```npm init -y # will fill out the fields in the initialze process for you ```

## Install Modules with npm install  
Installing modules from npm is one of the most basic things you should learn to do when getting started with npm. As you dive deeper, you'll begin to learn some variations on installing modules, but here's the very core of what you need to know to install a standalone module into the current directory:

```npm install <module name>```  
```npm install -D parcel-bundler```


The above command will install the parcel-bundler module into /node_modules in the current directory. Whenever you install a module from npm, it will be installed into the node_modules folder.

In addition to triggering an install of a single module, you can actually trigger the installation of all modules that are listed as in the package.json file from a download directory. To do so, you'll simply need to run the command itself:  
`npm install`

## Developer Dependancy  
When saving modules that you only want to use in the development of your project then you use the flag --save-dev or -D. Using this flag will save a record of the installed module in the package.json file in the devDependencies.

Remember that install modules using install or -i are recorded as dependencies in your package.json file. This sort of dependancy is use in production version of your project.

On the other hand, devDependencies are a modules you use while creating your project such as linters development servers testing libraries etc. The modules that you use to build your project, but don't need to use when it's running.

```npm install <module> --save-dev # Where <module> is the name of the module you want to install```  
or  
```npm install <module> -D # Where <module> is the name of the module you want to install```


### Resources  
[Additional NPM Commands](https://nodesource.com/blog/eleven-npm-tricks-that-will-knock-your-wombat-socks-off)
