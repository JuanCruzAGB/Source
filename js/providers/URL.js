// ? JuanCruzAGB repository
import Class from "@juancruzagb/src/js/Class.js";

/**
 * * URL gives an excellent URL service.
 * @export
 * @class URL
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com
 */
export default class URL extends Class {
    /**
     * * Creates an instance of URL.
     * @param {string} [route=window.location.href]
     * @memberof URL
     */
    constructor (route = window.location.href) {
        super({
            props: {
                hash: URL.hash(route),
                host: URL.host(route),
                href: URL.href(route),
                origin: URL.origin(route),
                params: URL.params(false, route),
                pathname: URL.pathname(route),
                protocol: URL.protocol(route),
            },
        });
    }

    /**
     * * Returns the URL #hash parameter if exist.
     * @static
     * @param {string} [route=window.location.href]
     * @returns {string|false}
     * @memberof URL
     */
    static hash (route = window.location.href) {
        let hash = /#/

        if (!hash.exec(route)) return false;

        return route.split('#').pop().split('?').shift();
    }

    /**
     * * Returns the URL host.
     * @static
     * @param {string} [route=window.location.href]
     * @returns {string}
     * @memberof URL
     */
    static host (route = window.location.href) {
        return route.split('//').pop().split('/').shift().split('#').shift().split('?').shift();
    }

    /**
     * * Returns the URL href.
     * @static
     * @param {string} [route=window.location.href]
     * @returns {string}
     * @memberof URL
     */
    static href (route = window.location.href) {
        return route;
    }

    /**
     * * Returns the URL origin.
     * @static
     * @param {string} [route=window.location.href]
     * @returns {string}
     * @memberof URL
     */
    static origin (route = window.location.href) {
        return [route.split('//').shift(), route.split('//').pop().split('/').shift().split('#').shift().split('?').shift()].join('//');
    }

    /**
     * * Returns the URL parameters or an specific parameter.
     * @static
     * @param {string} [name]
     * @param {string} [route=window.location.href]
     * @returns {array|string|false}
     * @memberof URL
     */
    static params (name = false, route = window.location.href) {
        let result = [];

        if (/\?/.exec(route)) {
            for (let param of route.split('?').pop().split('&')) {
                param = {
                    key: param.split('=').shift(),
                    value: param.split('=').pop()
                };

                if (name && param.key == name) return param.value;
                    
                result.push(param);
            }
        }

        if (name) return false;

        return result;
    }

    /**
     * * Returns the route path name without the #hash.
     * @static
     * @param {string} [route=window.location.href]
     * @returns {string}
     * @memberof URL
     */
    static pathname (route = window.location.href) {
        route = route.split('//').pop().split('#').shift().split('?').shift().split('/');

        route[0] = '';

        return route.join('/');
    }

    /**
     * * Returns the URL protocol.
     * @static
     * @param {string} [route=window.location.href]
     * @returns {string}
     * @memberof URL
     */
    static protocol (route = window.location.href) {
        return route.split('//').shift();
    }

    /**
     * * Add the "hashchange" event listener to the window.
     * @static
     * @param {string} hash
     * @param {object} callbacks
     * @param {object} close
     * @param {function} close.function
     * @param {object} close.params
     * @param {object} open
     * @param {function} open.function
     * @param {object} open.params
     * @memberof URL
     */
    static watch (hash, callbacks = {
        close: {
            function: params => { /* console.log(params); */},
            params: {},
        },
        open: {
            function: params => { /* console.log(params); */},
            params: {},
        },
    }) {
        window.addEventListener("hashchange", event => {
            if (URL.hash() == hash) {
                callbacks.open.function({
                    ...(callbacks.open.hasOwnProperty('params') ? callbacks.open.params : {}),
                    hash: URL.hash(),
                });
            } else {
                callbacks.close.function({
                    ...(callbacks.open.hasOwnProperty('params') ? callbacks.open.params : {}),
                    hash: URL.hash(),
                });
            }
        });
    }
}