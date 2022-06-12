/**
 * * Controls a callback class object.
 * @export
 * @class Callback
 */
export default class Callback {
    /**
     * * Set a callback.
     * @param {object|string} name
     * @param {object} [value=null]
     * @param {function} [value.function]
     * @param {object} [value.params]
     * @throws {Error}
     * @returns
     */
    add(name = {}, value = null) {
        if (!name) throw new Error('Callback name is required');

        if (name instanceof Object) {
            for (const callbackName in name) {
                if (Object.hasOwnProperty.call(name, callbackName)) this.add(callbackName, name[callbackName]);
            }

            return;
        }

        this[name] = {
            ...value,
            /**
             * * Executes a the callback.
             * @param {object} [params={}]
             * @memberof Class.callbacks
             */
            execute(params = {}) {
                this.function({
                    ...this.params,
                    ...params,
                });
            },
        };
    }

    /**
     * * Executes a Class callback.
     * @param {string} name
     * @param {object} [params={}]
     * @throws {Error}
     */
    execute(name, params = {}) {
        if (typeof name != 'string') throw new Error('Callback name is required');

        if (!this.has(name)) throw new Error('Callback does not exist');

        this[name].function({
            ...this[name].params,
            ...params,
        });
    }

    /**
     * * Check if there is a callback.
     * @param {string} name
     * @throws {Error}
     * @returns {boolean}
     */
    has(name) {
        if (name == undefined) throw new Error('Callback name is required');

        if (typeof name != 'string') throw new Error('Callback name must be a string');

        return this.hasOwnProperty(name);
    }

    /**
     * * Remove a callback.
     * @param {string} name
     * @throws {Error}
     */
    remove(name) {
        if (name == undefined) throw new Error('Callback name is required');

        if (this.has(name)) throw new Error('Callback does not exist');

        delete this[name];
    }
}