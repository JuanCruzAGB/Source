# [JuanCruzAGB](https://www.npmjs.com/package/@juancruzagb/src)
> by [JuanCruzAGB](https://github.com/JuanCruzAGB)

This package contains all the logic for the packages that did i make, it was created for my personal work (but you can use it **:D**).

 - [Installation](#installation)
 - [What contains?](#what-contains)
 - [Coming soon](#working-on)

## Installation
 1. Install from npm.
```
npm i @juancruzagb/src
```
 2. Import js.
```
import Class, { URL } from "@juancruzagb/src";
```

## What contains?
This package has a default export object called **Class**, you can create a new JavaScript object extended of this one.
Also gives service providers like: **URL**

### Class
Default **JavaScript** object, looks like a **React** component.
```
import Class from "@juancruzagb/src";

class Human extends Class {
    constructor (data = {}) {
        super(props, state);
    }
}

let human = new Human({
    props: {
        id: 1,
        name: 'Pepe',
    },
})
```

#### Methods:

##### Properties
 - **add**
```
human.props.add('name', 'Pepe');
human.props.add({
    name: 'Pepe',
});
human.props.add([ 'age', { name: 'Pepe', }, ]);
```
> Set a Class property

 - **has**
```
human.props.has('name'); // true
human.props.has('age'); // false
human.props.has('name', 'Pepe'); // true
human.props.has('name', 'Jorge'); // false
```
> Returns if the Class has a prop. Returns **boolean**

 - **remove**
```
human.props.remove('name');
```
##### State
 - **add**
```
human.state.add('working', false);
human.state.add({
    working: false,
});
human.state.add([ 'working', { playing: 'football', }, ]);
```
> Set a Class state

 - **has**
```
human.state.has('working'); // true
human.state.has('sleeping'); // false
human.state.has('working', false); // true
human.state.has('working', true); // false
```
> Returns if the Class has a state. Returns **boolean**

 - **remove**
```
human.state.remove('working');
```

##### Callbacks
 - **add**
```
human.callbacks.add('work', {
    function: params => { /* Do something */ },
    params: {},
});
human.callbacks.add({
    work: {
        function: params => { /* Do something */ },
        params: {},
    },
});
human.callbacks.add([
    'work', 
    play: {
        function: params => { /* Do something */ },
        params: {},
    },
]);
```
> Set a Class callback

 - **has**
```
human.callbacks.has('work'); // true
human.callbacks.has('play'); // false
```
> Returns if the Class has a callback. Returns **boolean**

 - **remove**
```
human.callbacks.remove('work');
```

 - **execute**
```
human.callbacks.execute('work');
human.callbacks.execute('work', {
    with: 'Manolo',
});
```
> Run a Class callback, you can send an object to the function as second param

### URL
Provides a window location href methods.
```
import URL from '@juancruzagb/src/js/providers/URL.js';
```

#### Mehods

 - **hash**
```
URL.hash(); // string | false
URL.hash('https://google.com/search?q=packages#topin'); // 'topic'
```
> Returns the URL hash param. Returns **string**|**false**

 - **host**
```
URL.host(); // string | false
URL.host('https://google.com/search?q=packages#topin'); // 'google.com'
```
> Returns the URL host. Returns **string**|**false**

 - **origin**
```
URL.origin(); // string | false
URL.origin('https://google.com/search?q=packages#topin'); // 'https://google.com'
```
> Returns the URL origin. Returns **string**|**false**

 - **params**
```
URL.params(); // array | false
URL.params('q'); // string | false
URL.params('q', 'https://google.com/search?q=packages#topin'); // 'packages'
```
> Returns the URL GET params. Returns **array**|**string**|**false**

 - **pathname**
```
URL.pathname(); // string | false
URL.pathname('https://google.com/search?q=packages#topin'); // '/search'
```
> Returns the URL pathname. Returns **string**|**false**

 - **protocol**
```
URL.protocol(); // string | false
URL.protocol('https://google.com/search?q=packages#topin'); // 'https'
```
> Returns the URL protocol. Returns **string**|**false**

## Working on
 - [X] Default Class object
 - [X] Providers
    - [X] URL Provider
    - [ ] Fetch Provider
    - [ ] LocalStorage Provider