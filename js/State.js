/**
 * * Controls the State methods.
 * @export
 * @class Methods
 * @author JuanCruzAGB <juan.cruz.armentia@gmail.com>
 */
 export default class Methods {
    /**
     * * Add a State.
     * @param {array|object|string} name
     * @param {*} [value=false]
     * @throws {Error}
     * @returns
     * @memberof Methods
     */
    add (name, value = false) {
        if (!name) throw new Error('State name is required');

        if (Array.isArray(name)) {
            for (const state of name) this.add(state);

            return;
        } else if (name instanceof Object) {
            for (const stateName in name) {
                if (Object.hasOwnProperty.call(name, stateName)) this.add(stateName, name[stateName]);
            }

            return;
        }

        this[name] = value;
    }

    /**
     * * Returns a State.
     * @param {string} name
     * @throws {Error}
     * @returns {object}
     * @memberof Methods
     */
    get (name) {
        if (!name) throw new Error('State name is required');

        if (!name instanceof String) throw new Error('State name must be a string');

        if (!this.has(name)) return undefined;

        return this[name];
    }

    /**
     * * Check if there is a State.
     * @param {array|string} name
     * @param {*} [value]
     * @throws {Error}
     * @returns {boolean}
     * @memberof Methods
     */
    has (name, value) {
        if (name == undefined) throw new Error('State name is required');

        if (Array.isArray(name)) {
            for (const state of name) {
                if (!state instanceof String) {
                    if (!this.has(...state)) return false;
                } else {
                    if (!this.has(state)) return false;
                }
            }

            return true;
        }

        if (!name instanceof String) throw new Error('State name must be a string');

        if (value != undefined) return this.hasOwnProperty(name) && this[name] == value;

        return this.hasOwnProperty(name);
    }

    /**
     * * Remove a State.
     * @param {string} name
     * @throws {Error}
     * @memberof Methods
     */
    remove (name) {
        if (name == undefined) throw new Error('State name is required');

        if (Array.isArray(name)) {
            for (const state of name) this.remove(state);

            return;
        }

        if (!name instanceof String) throw new Error('State name must be a string');

        if (this.has(name)) throw new Error('State does not exist');

        delete this[name];
    }
}