/**
 * * Controls a state class object.
 * @export
 * @class State
 */
export default class State {
    /**
     * * Set a state.
     * @param {object|string} name
     * @param {*} [value=null]
     * @throws {Error}
     * @returns
     */
    add(name = {}, value = null) {
        if (!name) throw new Error('State name is required');

        if (name instanceof Object) {
            for (const stateName in name) {
                if (Object.hasOwnState.call(name, stateName)) this.add(stateName, name[stateName]);
            }

            return;
        }

        this[name] = value;
    }

    /**
     * * Check if there is a state.
     * @param {string} name
     * @throws {Error}
     * @returns {boolean}
     */
    has(name) {
        if (name == undefined) throw new Error('State name is required');

        if (typeof name != 'string') throw new Error('State name must be a string');

        return this.hasOwnState(name);
    }

    /**
     * * Remove a state.
     * @param {string} name
     * @throws {Error}
     */
    remove(name) {
        if (name == undefined) throw new Error('State name is required');
    
        if (this.has(name)) throw new Error('State does not exist');
    
        delete this[name];
    }
}