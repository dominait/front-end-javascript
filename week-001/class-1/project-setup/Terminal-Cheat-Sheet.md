# Termainal Commands

`Terminal Commands`
__cd__
To navigate the file system use cd to change directory
to navigate to the src/js directory
```
cd src/js
```
Move back to the root directory
```
cd ../src
```
__ls__
directory listing
```
ls src
```
__pwd__
current working directory
```
pwd
```
__mkdir__
make a directory
```
mkdir src
// windows make multiple directories
mkdir src, src/css src/js, src/data, src/assets
```

__rm__
remove directory make sure to use -rf flag for directories -r is recursive and f is for force.
```
rm -rf src/js src/assets
 
```

__touch__
For mac users makes a file
```
 touch src/index.html
```

__New-Item__
For windows users makes a new file
```
 New-Item src/index.html
```
__rm__
remove a file not for files you do not have to use the -rf flag.
```
rm src/index.js
```
__CTRL+c__
kill switch breaks out of a process command or hung terminal and returns you to the command prompt

__mv__
move file or files
```
touch src/css/forms.js
mv src/css/forms.js  src/js/
```

__cp__
copy files from one location to another 
```
cp src/css/Readme.md  src/js/Readme.md
```