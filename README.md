# React Client Project Template
[![Build Status](https://travis-ci.org/thomasLevans/react_client_template.svg?branch=master)](https://travis-ci.org/thomasLevans/react_client_template)
[![Dependency Status](https://david-dm.org/thomasLevans/react_client_template.svg)](https://david-dm.org/thomasLevans/react_client_template)
[![devDependency Status](https://david-dm.org/thomasLevans/react_client_template/dev-status.svg)](https://david-dm.org/thomasLevans/react_client_template#info=devDependencies)


This is a barebones template I have derived from my experience with building and testing React projects. It is by no means perfect or final but serves as a patterned approach for those new to React.


## Project Commands
Run Test (single run):
```
$ npm run test
```
Run Test (on file changes):
```
$ npm run test:watch
```

Run Application via Webpack's Dev Server:
```
$ npm start
```

Bundle and minify Application:
```
$ npm run deploy
```

## Adding to the Project
Feel like you can improve this template? Simply open a pull requests with changes!


## Project Structure
Note that leaf directories will always contain a root script which by convention
is index.js. This allows for more intuitive importing of ES6 modules and these
leaf directories will be referred to as modules throughout this document.


```
/src
--/actions
--/components
--/creators
--/reducers
--/services
--/store
/test
--/creators
--/reducers
```


### /src Dir
At the root of this directory you will find the entry point of the application,
index.js. In this script file the Redux store is loaded and Router and routes are
configured. Note that the top level component, App, and it's relationship to child
components as a routing structure.


#### /actions Dir
This module contains the action types as constants to be consumed by creators
and reducers. The convention for adding an action is:


```
export const ACTION_TYPE = 'ACTION_TYPE';
```


#### /components Dir
This directory contains all components as discrete modules. There should not be
any submodules to a module in this directory. The top level component for the
application is in the module `app` and should __not__ need to be modified. Convention
for adding a component is as follows:


Via terminal:
```
$ mkdir src/yourComponent
$ touch src/yourComponent/index.js
$ touch src/yourComponent/YourComponent.less
```
About these files:
 - __index.js__ - contains the component definition, exported as default.
 - __YourComponent.less__ - contains the component specific stylesheet
  - Remember to require your stylesheet `require('./YourComponent.less');` in
  index.js.


__NOTE:__
- Be sure to read up deciding whether a component has state or should be
 stateless. See [this](https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html) if you are unclear.
- __ALL COMPONENTS MUST BE PURE!__
- Use `React.createClass()` to define components as opposed to an ES6 class that
`extends React.Component`, there is a difference.


#### /creators Dir
This module exports the action creator functions that either return an action object
or, in the case of an async action creator, a function that in turn calls other
creators. Given the action AN_ACTION the convention for a typical (as in not async)
creator would be:


```
import { AN_ACTION } from '../actions';
export function(parameters) {
  return {
    type: AN_ACTION,
    ...parameters
  }
}
```
__NOTE:__
- For a detailed explanation of actions and creators see [this](http://redux.js.org/docs/basics/Actions.html)
- For more on the behavior of the spread operator `...` see [this](http://redux.js.org/docs/recipes/UsingObjectSpreadOperator.html)


#### /reducers Dir
At first glance this directory appears to be the exception to the convention for
defining modules. Just like the state of the application is a tree data structure,
the functions that 'reduce' an action to a change in the application's state form
a tree. Thus this directory is a module where the root reducer function is defined
and exported in index.js while all the child reducers appear in named scripts. If
you read [this](http://redux.js.org/docs/basics/Reducers.html) you will note that
Redux gives use the `combineReducers` function which should map the root reducer
for us implicitly. However for the sake of E2E testing we will maintain our own
root reducer, after all writing and testing reducers is the easiest part! The reducer
tree is the backbone of the application's functionality and can be defined as:
> A function whose concern is limited to a specific level of the state tree and
> whose purpose is to take the prior state of that level of the state and return a
> __new__ state object (__NO MUTATIONS!!!__). This new state object is composed of
> the parts of the previous state that should remain unchanged and either the result
> returned by calling a sub reducer, or directly from the reducer.


#### /services Dir
This directory holds any service modules that are required by the application.


#### /store Dir
This module defines the Redux store, and once configured should not require changes
be made. Here is where any middleware, such as logger, are applied to the store.


### /test Dir
The test directory holds subdirectories organizing tests by the type of entity. The
test.config.js file sets up the virtual jsdom for the component unit tests, as well
as where plugins for chai are specified.
