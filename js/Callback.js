// ? JuanCruzAGB repository
import Class from "@juancruzagb/src/js/Class.js";

/**
 * * Controls an Callback object.
 * @export
 * @class Callback
 * @extends Class
 * @author JuanCruzAGB <juan.cruz.armentia@gmail.com>
 */
export class Callback extends Class {
    /**
     * * Creates an instance of Callback.
     * @param {object} [data]
     * @param {object} [data.props]
     * @param {string} [data.props.function]
     * @param {object} [data.props.params={}]
     * @memberof Callback
     */
    constructor (data = {
        props: {
            function: params => { /* console.log(params) */ },
            params: {},
        },
    }) {
        super({
            props: {
                ...Callback.props(),
                ...(data && data.hasOwnProperty('props')) ? data.props : {},
            },
        });
    }

    /**
     * * Executes a the callback.
     * @param {object} [params={}]
     */
    execute (params = {}) {
        this.props.function({
            ...this.params,
            ...params,
        });
    }

    /**
     * * Returns default properties.
     * @static
     * @return {object}
     * @memberof Callback
     */
    static props () {
        return {
            function: params => { /* console.log(params) */ },
            params: {},
        };
    }
}

/**
 * * Controls the Callback methods.
 * @export
 * @class Methods
 * @author JuanCruzAGB <juan.cruz.armentia@gmail.com>
 */
export default class Methods {
    /**
     * * Add a Callback.
     * @param {array|object|string} name
     * @param {object} [value=null]
     * @param {function} [value.function]
     * @param {object} [value.params]
     * @throws {Error}
     * @returns
     * @memberof Methods
     */
    add (name, value = null) {
        if (!name) throw new Error('Callback name is required');

        if (Array.isArray(name)) {
            for (const callback of name) this.add(callback);

            return;
        } else if (name instanceof Object) {
            for (const callbackName in name) {
                if (Object.hasOwnProperty.call(name, callbackName)) this.add(callbackName, name[callbackName]);
            }

            return;
        }

        this[name] = new Callback(value);
    }

    /**
     * * Executes a Callback.
     * @param {string} name
     * @param {object} [params={}]
     * @throws {Error}
     * @memberof Methods
     */
    execute (name, params = {}) {
        if (!name) throw new Error('Callback name is required');

        if (!name instanceof String) throw new Error('Callback name must be a string');

        if (!this.has(name)) throw new Error('Callback does not exist');

        this[name].execute({
            ...params,
        });
    }

    /**
     * * Returns a Callback.
     * @param {string} name
     * @throws {Error}
     * @returns {object}
     * @memberof Methods
     */
    get (name) {
        if (!name) throw new Error('Callback name is required');

        if (!name instanceof String) throw new Error('Callback name must be a string');

        if (!this.has(name)) return undefined;

        return this[name];
    }

    /**
     * * Check if there is a Callback.
     * @param {array|string} name
     * @throws {Error}
     * @returns {boolean}
     * @memberof Methods
     */
    has (name) {
        if (name == undefined) throw new Error('Callback name is required');

        if (Array.isArray(name)) {
            for (const callback of name) {
                if (!this.has(callback)) return false;
            }

            return true;
        }

        if (!name instanceof String) throw new Error('Callback name must be a string');

        return this.hasOwnProperty(name);
    }

    /**
     * * Remove a Callback.
     * @param {string} name
     * @throws {Error}
     * @memberof Methods
     */
    remove (name) {
        if (name == undefined) throw new Error('Callback name is required');

        if (Array.isArray(name)) {
            for (const callback of name) this.remove(callback);

            return;
        }

        if (!name instanceof String) throw new Error('Callback name must be a string');

        if (this.has(name)) throw new Error('Callback does not exist');

        delete this[name];
    }
}