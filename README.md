# vscode-student-presentation
****
## Table of Contents
* [Thing we are going over](#things)
* [VS Code is the best thing ever...](#vscodesync)
* [Useful Links](#links)
* [Useful Keyboard Shortcuts](#keyboard)
* [Debugger Reference](#debugger)
****
## Things we are going over {#things}

* Markdown Intro
  * Markdown Preview
* Themes briefly (google is your friend)
* Settings briefly (google is your friend)
  * Mac
    * Code>Prefences>Settings
    * Search "tab size"
  * Windows
    * File>Prefences>Settings
    * Search "tab size"
  * Linux ??? but probably similar
* Extensions (google is your friend)
  * **Main ones I use**
    * Eslint
    * Markdown Preview Enhanced
    * Markdown Shorcuts
    * VS Live Share
* Emmet
  * Emmet HTML
  * Emmet JSX
* Intellisense 
  * (import db.js into server.js)
* Snippets and Autocomplete
  * Custom Snippets
  * Snippet Extensions
* Git Integration
  * Pulling/Pushing
  * Full Commits/Staging Commits
  * Undo
* Extended debugger example
  * Toy Problems
  * Server Side Example
* VS Live Share (This may be save your life in solo week)

## Notes for Part 2
* Eslint --init generally a good idea to do this before you open a js file.
* .gitignore before npm install or vscode will **** bricks
* CSS Emmet
  * Emmet is available in other code editors as an extension, but VS code includes it for you.
* VS Live Share
* More Debugging 
  * Questions Please Ask Now
* General Questions

****

## VS code is the best thing ever... {#vscodesync}

But now how do I transfer my amazing settings between my many computers:

[Fear not here there is an extension for that. Click here on your own time to learn more!](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)

****

## Useful Links {#links}

[Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
[Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/)
[VS Code Guid to Snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

****
## Useful Keyboard Shorcuts {#keyboard}

* Open Terminal: (control + `)
* Open New Folder: (cmd + 'O')
* Move line up/down: (option + 'arrow up||arrow down)
* Find and Select All: (cmd + f) > Type Word > (option + enter)

****

## Reference Guide on how to use debugger {#debugger}

* Either be inside a javascript file in a directory WITHOUT a package.json
* Or node will use the file described as "main" in package.json as a start point.

* Navigate to debug screen on left hand side
* Place a debugger statement in code where you would like to stop.
* Press green play button, select node.js if dropdown appears
* Code will run in debug terminal, note errors and console.logs will be displayed there, **If you are running a node.js server in another terminal using the same port you will get an EADDRESS error**
* Make sure the code you wish to test is being triggered, either by api calls from postman or by ensuring the function you which to test is called. 
* Happy debugging!
