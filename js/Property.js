/**
 * * Controls the Property methods.
 * @export
 * @class Methods
 * @author JuanCruzAGB <juan.cruz.armentia@gmail.com>
 */
export default class Methods {
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
            for (const prop of name) {
                this.remove(prop);
            }

            return;
        }

        if (!name instanceof String) throw new Error('Property name must be a string');

        if (this.has(name)) throw new Error('Property does not exist');

        delete this[name];
    }

    /**
     * * Set a Property.
     * @param {array|object|string} name
     * @param {*} [value=null]
     * @throws {Error}
     * @returns
     * @memberof Methods
     */
    set (name, value = null) {
        if (!name) throw new Error('Property name is required');

        if (Array.isArray(name)) {
            for (const prop of name) {
                this.set(prop);
            }

            return;
        } else if (name instanceof Object) {
            for (const propertyName in name) {
                if (Object.hasOwnProperty.call(name, propertyName)) this.set(propertyName, name[propertyName]);
            }

            return;
        }

        this[name] = value;
    }
}