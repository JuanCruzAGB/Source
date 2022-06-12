/**
 * * Controls a property class object.
 * @export
 * @class Property
 */
export default class Property {
    /**
     * * Set a property.
     * @param {object|string} name
     * @param {*} [value=null]
     * @throws {Error}
     * @returns
     */
    add(name = {}, value = null) {
        if (!name) throw new Error('Property name is required');

        if (name instanceof Object) {
            for (const propertyName in name) {
                if (Object.hasOwnProperty.call(name, propertyName)) this.add(propertyName, name[propertyName]);
            }

            return;
        }

        this[name] = value;
    }

    /**
     * * Check if there is a property.
     * @param {string} name
     * @throws {Error}
     * @returns {boolean}
     */
    has(name) {
        if (name == undefined) throw new Error('Property name is required');

        if (typeof name != 'string') throw new Error('Property name must be a string');

        return this.hasOwnProperty(name);
    }

    /**
     * * Remove a property.
     * @param {string} name
     * @throws {Error}
     */
    remove(name) {
        if (name == undefined) throw new Error('Property name is required');

        if (this.has(name)) throw new Error('Property does not exist');

        delete this[name];
    }
}