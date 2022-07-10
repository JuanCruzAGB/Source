/**
 * * Controls the Property methods.
 * @export
 * @class Methods
 * @author JuanCruzAGB <juan.cruz.armentia@gmail.com>
 */
export default class Methods {
    /**
     * * Check if there is a Property.
     * @param {string} name
     * @throws {Error}
     * @returns {boolean}
     * @memberof Methods
     */
    has (name) {
        if (name == undefined) throw new Error('Property name is required');

        if (typeof name != 'string') throw new Error('Property name must be a string');

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

        if (this.has(name)) throw new Error('Property does not exist');

        delete this[name];
    }

    /**
     * * Set a Property.
     * @param {object|string} name
     * @param {*} [value=null]
     * @throws {Error}
     * @returns
     * @memberof Methods
     */
    set (name = {}, value = null) {
        if (!name) throw new Error('Property name is required');

        if (name instanceof Object) {
            for (const propertyName in name) {
                if (Object.hasOwnProperty.call(name, propertyName)) this.set(propertyName, name[propertyName]);
            }

            return;
        }

        this[name] = value;
    }
}