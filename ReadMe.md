# CRUD Application using NodeJS Express and Mongodb #

Express : Web Framework
NodeJs : Runtime
MongoDB: Database
VS Code: Code Editor

## Step 1: Setting up Application
1. Initate Project: Open folder in VS Code.
    ``` 
    npm init 

    ```

    It will ask for
    package name, version, description, entry point, test command, git repository, keywords, author, license

    After entering all above details it will generate package.json file

    package.json is similar to pom.xml in java

2. Install Packages: All the installed packages will there in dependecies block of package.json

It created node_modules folder and package-lock.json file
node_moules: whatever module we will install that we will available in node_modules.

package-lock.json: is an auto-generated file that provides a detailed, deterministic record of the dependency tree.
It locks down the specific versions of every installed package, preventing unintended updates.


```
npm install express
npm install mongodb
npm install mongoose
npm install -g nodemon --save-dev
```

nodemon: Automatically restart server once we save code. nodemon package is not required in production. So intsall it in dev environment

Adding below script in package.json to tell nodemon to start with app.js
> "start": "nodemon app.js"

3. App.js : Create app.js which is our entry point for this application

