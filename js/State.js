/**
 * * Controls the State methods.
 * @export
 * @class Methods
 * @author JuanCruzAGB <juan.cruz.armentia@gmail.com>
 */
export default class Methods {
    /**
     * * Check if there is a State.
     * @param {string} name
     * @throws {Error}
     * @returns {boolean}
     * @memberof Methods
     */
    has (name) {
        if (name == undefined) throw new Error('State name is required');

        if (typeof name != 'string') throw new Error('State name must be a string');

        return this.hasOwnState(name);
    }

    /**
     * * Remove a State.
     * @param {string} name
     * @throws {Error}
     * @memberof Methods
     */
    remove (name) {
        if (name == undefined) throw new Error('State name is required');
    
        if (this.has(name)) throw new Error('State does not exist');
    
        delete this[name];
    }

    /**
     * * Set a State.
     * @param {object|string} name
     * @param {*} [value=null]
     * @throws {Error}
     * @returns
     * @memberof Methods
     */
    set (name = {}, value = null) {
        if (!name) throw new Error('State name is required');

        if (name instanceof Object) {
            for (const stateName in name) {
                if (Object.hasOwnState.call(name, stateName)) this.set(stateName, name[stateName]);
            }

            return;
        }

        this[name] = value;
    }
}