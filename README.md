# node-react-redux-jest

## A simple example to demonstrate the functionality of jest with react and redux.

The data is representing by a json file to be used by the component.

The transpiler used to generate javascript is Babel.

Webpack is used to create the javascript bundle of the project (see webpack.config.js).

Foreman is used to start two services:
```
    - Webpack, that's responsible for watch changes and recompile code
    - Node, that's responsible to run the web server (see config file server.js).
```

To get the code:

`git clone https://github.com/QuickMonkeys/node-react-redux-jest.git`

`cd node-react-redux-jest`

run `npm i` to install node_modules

run `nf start` to start the application using Foreman.

To execute the tests:

run `npm t` to exetute all tests.

run `npm t <file name>` to execute a specific test.
