/**
 * * Controls the Callback methods.
 * @export
 * @class Methods
 * @author JuanCruzAGB <juan.cruz.armentia@gmail.com>
 */
export default class Methods {
    /**
     * * Executes a Class callback.
     * @param {string} name
     * @param {object} [params={}]
     * @throws {Error}
     * @memberof Methods
     */
    execute (name, params = {}) {
        if (typeof name != 'string') throw new Error('Callback name is required');

        if (!this.has(name)) throw new Error('Callback does not exist');

        this[name].function({
            ...this[name].params,
            ...params,
        });
    }

    /**
     * * Check if there is a Callback.
     * @param {string} name
     * @throws {Error}
     * @returns {boolean}
     * @memberof Methods
     */
    has (name) {
        if (name == undefined) throw new Error('Callback name is required');

        if (typeof name != 'string') throw new Error('Callback name must be a string');

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

        if (this.has(name)) throw new Error('Callback does not exist');

        delete this[name];
    }

    /**
     * * Set a Callback.
     * @param {object|string} name
     * @param {object} [value=null]
     * @param {function} [value.function]
     * @param {object} [value.params]
     * @throws {Error}
     * @returns
     * @memberof Methods
     */
    set (name = {}, value = null) {
        if (!name) throw new Error('Callback name is required');

        if (name instanceof Object) {
            for (const callbackName in name) {
                if (Object.hasOwnProperty.call(name, callbackName)) this.set(callbackName, name[callbackName]);
            }

            return;
        }

        this[name] = {
            ...value,
            /**
             * * Executes a the callback.
             * @param {object} [params={}]
             */
            execute (params = {}) {
                this.function({
                    ...this.params,
                    ...params,
                });
            },
        };
    }
}