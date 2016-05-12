# JETMAN

## Overview 

JETMAN is a conceptual project to research app architecture using a modified MEAN stack I'm calling "JETMAN". 

Jade
Express
TypeScript
MongoDB
Angular.js
Node.js

With a little bit of Gulp, Bower, and SCSS.

With this application, want to focus on:

- A common sense approach to directory structure mirroring endpoints.
- Zero "magic" that makes code difficult to understand.
- Strongly typed classes to hold true to conventions and for easy to write and debug code.
- Interchangeable parts including the ability to swap out databases by simply extending a different parent class on the model.
- Experimenting with Angular 2.

#### Note:
This application is purely in a conceptual state and not functioning as expected.

## Running 
1. Install dependencies
    ```shell
    npm install
    npm install -g tsd
    tsd install
    ```
    Some things to note:

    * `npm install` will install this project's node dependencies from `package.json`.
    * `tsd install` will retrieve `.d.ts` files from [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped).

2. Compile the app with the following command:
    ```shell
    tsc
    ```
    The above command will use `tsconfig.json` to compile all necessary files.

3. Launch the Node process to serve the app using the following command:
    ```shell
    node app.js
    ```

4. Open your favorite browser and navigating to `http://localhost:3000/` to access the app.
