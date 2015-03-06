<a href="http://www.wtfpl.net/"><img
       src="http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png"
       width="80" height="15" alt="WTFPL" /></a>

## Durelia

A simple Durandal (AMD) VM Wrapper for the [Aurelia Framework](http://aurelia.io)

## Installation

1. Open up your terminal and go into your projects root
2. Type following command:

```
jspm install github:zewa666/durelia
```
3. Copy a DurandalVM into your Project (e.g. `root/amd/testmodule.js`)
4. Create a new AureliaVM inside `src` (e.g. `src/testmodule.js`)
5. (Optional) Create a View for your new VM (e.g. `src/testmodule.html`)
6. Add this code into your AureliaVM:

```
// Importing Durelia's wrapper
import {Wrapper} from 'durelia';

// create a local instance of your DurandalVM
let VM = new Wrapper('../amd/testmodule');

// export as function so router nows how to use your VM
export let TestModule = () => { return VM; };
```

> You can pass a second argument to Wrapper which is the path to the View you'd like to leverage. If none is provided, following Aurelia's convention, a View with the same name as the module will be taken.

## Knockout support

The updated version provides support for Knockout. If your Durandal VMs contain references to Knockout (take a look at the [unit test stub](https://github.com/zewa666/durelia/blob/master/test/amd/ko_vm.js)), you have to do one additional step.

1. Open the file `config.js` of your project
2. In the System.config.paths section add this line at the end:

```
"knockout": "jspm_packages/github/zewa666/durelia@master/test/knockout.js"
```

so it looks like:

```
System.config({
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js",
    ...
    "knockout": "jspm_packages/github/zewa666/durelia@master/test/knockout.js"
  }
});
```

This will add a Polyfill for Knockout, which translates Observables and ObservableArray back to the original value.