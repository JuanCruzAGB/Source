# [JuanCruzAGB](https://www.npmjs.com/package/@juancruzagb/src)
> by [JuanCruzAGB](https://github.com/JuanCruzAGB)

Este paquete contiene toda la lógica para el resto de paquetes que hice, fue creado para mi uso personal (pero puedes usarla sin problema **:D**).

 - [Instalación](#instalación)
 - [Qué contiene?](#qué-contiene)
 - [Próximamente](#working-on)

## Instalación
 1. Instalar con npm.
```
npm i @juancruzagb/src
```
 2. Importar js.
```
import Class, { URL } from "@juancruzagb/src";
```

## Qué contiene?
El paquete tiene un objecto llamado **Class**, podes crear un nuevo object **JavaScript** extendido del mismo.
Además contiene proveedores de servicio, tales como: **URL**

### Class
Object de **JavaScript** por defecto, parecido a un componente de **React**.
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
> Establece una propiedad a la Clase.

 - **has**
```
human.props.has('name'); // true
human.props.has('age'); // false
human.props.has('name', 'Pepe'); // true
human.props.has('name', 'Jorge'); // false
```
> Devuelve si la Clase tiene o no una propiedad. Retornando **boolean**.

 - **remove**
```
human.props.remove('name');
```
> Remueve una propiedad a la Clase.
##### State
 - **add**
```
human.state.add('working', false);
human.state.add({
    working: false,
});
human.state.add([ 'working', { playing: 'football', }, ]);
```
> Establece un estado a la Clase.

 - **has**
```
human.state.has('working'); // true
human.state.has('sleeping'); // false
human.state.has('working', false); // true
human.state.has('working', true); // false
```
> Devuelve si la Clase tiene o no un estado. Retornando **boolean**.

 - **remove**
```
human.state.remove('working');
```
> Remueve un estado a la Clase.

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
> Establece una función callback a la Clase.

 - **has**
```
human.callbacks.has('work'); // true
human.callbacks.has('play'); // false
```
> Devuelve si la Clase tiene o no un callback. Retornando **boolean**.

 - **remove**
```
human.callbacks.remove('work');
```
> Remueve un estado a la Clase.

 - **execute**
```
human.callbacks.execute('work');
human.callbacks.execute('work', {
    with: 'Manolo',
});
```
> Ejecuta la funcion callback de la Clase, se puede enviar un objeto a la funcion como segundo parametro

### URL
Provee varios metodos propios del mismo window location href.
```
import URL from '@juancruzagb/src/js/providers/URL.js';
```

#### Mehods

 - **hash**
```
URL.hash(); // string | false
URL.hash('https://google.com/search?q=packages#topin'); // 'topic'
```
> Devuelve el parametro hash de la URL. Retornando **string**|**false**

 - **host**
```
URL.host(); // string | false
URL.host('https://google.com/search?q=packages#topin'); // 'google.com'
```
> Devuelve el host de la URL. Retornando **string**|**false**

 - **origin**
```
URL.origin(); // string | false
URL.origin('https://google.com/search?q=packages#topin'); // 'https://google.com'
```
> Devuelve el origen de la URL. Retornando **string**|**false**

 - **params**
```
URL.params(); // array | false
URL.params('q'); // string | false
URL.params('q', 'https://google.com/search?q=packages#topin'); // 'packages'
```
> Devuelve los parametros GET de la URL. Retornando **array**|**string**|**false**

 - **pathname**
```
URL.pathname(); // string | false
URL.pathname('https://google.com/search?q=packages#topin'); // '/search'
```
> Devuelve el pathname de la URL. Retornando **string**|**false**

 - **protocol**
```
URL.protocol(); // string | false
URL.protocol('https://google.com/search?q=packages#topin'); // 'https'
```
> Devuelve el protocolo de la URL. Retornando **string**|**false**

### Working on
 - [X] Default Class object
 - [X] Providers
    - [X] URL Provider
    - [ ] Fetch Provider
    - [ ] LocalStorage Provider