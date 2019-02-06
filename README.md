# vscode-student-presentation
A repo to go along with the vscode live demonstration

## Things we are going over

* Themes briefly (google is your friend)
* Settings briefly (google is your friend)
* Extensions (google is your friend)
  * **Main ones I use**
    * Eslint
    * Markdown Preview Enhanced
    * VS Live Share
* Intellisense
* Snippets and Autocomplete
* Extended debugger example
  * Toy Problems
  * Server Side Example
* VS Live Share (This may be save your life in solo week)



## Reference Guide on how to use debugger

* Either be inside a javascript file in a directory WITHOUT a package.json
* Or node will use the file described as main in package.json as a start point

* Navigate to debug screen on left hand side
* Place a debugger statement in code where you would like to stop.
* Press green play button, select node.js if dropdown appears
* Code will run in debug terminal, note errors and console.logs will be displayed there, **If you are running a node.js server in another terminal using the same port you will get an eaddress error**
* make sure the code you wish to test is being triggered, either by api calls from postman or by ensuring the function you which to test is called. 
* Happy debugging!
