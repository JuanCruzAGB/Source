/**
 * * Controls the Property methods.
 * @export
 * @class Methods
 * @author JuanCruzAGB <juan.cruz.armentia@gmail.com>
 */
 export default class Methods {
    /**
     * * Add a Property.
     * @param {array|object|string} name
     * @param {*} [value=null]
     * @throws {Error}
     * @returns
     * @memberof Methods
     */
    add (name, value = null) {
        if (!name) throw new Error('Property name is required');

        if (Array.isArray(name)) {
            for (const prop of name) this.add(prop);

            return;
        } else if (name instanceof Object) {
            for (const propertyName in name) {
                if (Object.hasOwnProperty.call(name, propertyName)) this.add(propertyName, name[propertyName]);
            }

            return;
        }

        this[name] = value;
    }

    /**
     * * Returns a Property.
     * @param {string} name
     * @throws {Error}
     * @returns {object}
     * @memberof Methods
     */
    get (name) {
        if (!name) throw new Error('Property name is required');

        if (!name instanceof String) throw new Error('Property name must be a string');

        if (!this.has(name)) return undefined;

        return this[name];
    }

    /**
     * * Check if there is a Property.
     * @param {array|string} name
     * @param {*} [value]
     * @throws {Error}
     * @returns {boolean}
     * @memberof Methods
     */
    has (name, value) {
        if (name == undefined) throw new Error('Property name is required');

        if (Array.isArray(name)) {
            for (const prop of name) {
                if (!prop instanceof String) {
                    if (!this.has(...prop)) return false;
                } else {
                    if (!this.has(prop)) return false;
                }
            }

            return true;
        }

        if (!name instanceof String) throw new Error('Property name must be a string');

        if (value != undefined) return this.hasOwnProperty(name) && this[name] == value;

        return this.hasOwnProperty(name);
    }

    /**
     * * Remove a Property.
     * @param {string} name
     * @throws {Error}
     * @memberof Methods
     */
    remove (name) {
        if (name == undefined) throw new Error('Property name is required');

        if (Array.isArray(name)) {
            for (const prop of name) this.remove(prop);

            return;
        }

        if (!name instanceof String) throw new Error('Property name must be a string');

        if (this.has(name)) throw new Error('Property does not exist');

        delete this[name];
    }
}