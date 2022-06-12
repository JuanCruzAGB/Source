// ? JuanCruzAGB repository
import Class from "@juancruzagb/src/js/Class.js";

/** @var {object} defaultProps Default props. */
let defaultProps = {
    name: 'something',
};

/**
 * * LocalStorage gives an excellet LocalStorage Service.
 * @export
 * @class LocalStorage
 * @extends Class
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com
 */
export default class LocalStorage extends Class {
    /**
     * * Creates an instance of LocalStorage.
     * @param {object} [props] LocalStorage properties:
     * @param {string} [props.name='something'] LocalStorage data name.
     * @param {*} [data=''] Data saved in the LocalStorage.
     * @memberof LocalStorage
     */
    constructor (props = {
        name: 'something',
    }, data = '') {
        super({ ...defaultProps, ...props });
        this.setData(data);
    }

    /**
     * * Set the LocalStorage data.
     * @param {*} [data=''] Data in the LocalStorage.
     * @memberof LocalStorage
     */
    setData (data = '') {
        this.data = data;
    }

    /**
     * * Get data from the LocalStorage.
     * @static
     * @param {string} name Name of the data to get.
     * @returns {LocalStorage}
     * @memberof LocalStorage
     */
    static get (name = '') {
        if (name == undefined) {
            throw new Error('The name is required');
        }
        if (typeof name != 'string') {
            throw new Error('The name must be a string');
        }
        let instance = new this({
            name: name,
        });
        if (this.has(name)) {
            instance.setData(JSON.parse(localStorage.getItem(name)));
        }
        return instance;
    }

    /**
     * * Save data in the LocalStorage.
     * @static
     * @param {string} name Name of the data to save.
     * @param {*} data Data to save.
     * @param {boolean} overwrite If the LocalStorage must overwrite the data.
     * @returns {LocalStorage}
     * @memberof LocalStorage
     */
    static set (name = '', data = [], overwrite = false) {
        if (name == undefined) {
            throw new Error('The name is required');
        }
        if (typeof name != 'string') {
            throw new Error('The name must be a string');
        }
        data = JSON.stringify(data);
        let instance = new this({
            name: name,
        }, data);
        if (!this.has(name)) {
            localStorage.setItem(name, data);
            return instance;
        }
        if (!overwrite) {
            instance.setState({ warning: 'There is previous data in the LocalStorage' });
            return instance;
        }
        localStorage.setItem(name, data);
        return instance;
    }

    /**
     * * Remove data from the LocalStorage.
     * @static
     * @param {string} name Name of the data to get.
     * @returns {LocalStorage}
     * @memberof LocalStorage
     */
    static remove (name = '') {
        if (name == undefined) {
            throw new Error('The name is required');
        }
        if (typeof name != 'string') {
            throw new Error('The name must be a string');
        }
        let instance = new this({
            name: name,
        });
        if (this.has(name)) {
            instance.setData('');
            localStorage.removeItem(name);
        }
        return instance;
    }

    /**
     * * Check if LocalStorage has a data.
     * @static
     * @param {string} name Name of the data to check.
     * @returns {boolean}
     * @memberof LocalStorage
     */
    static has (name = '') {
        if (name == undefined) {
            throw new Error('The name is required');
        }
        if (typeof name != 'string') {
            throw new Error('The name must be a string');
        }
        return localStorage.getItem(name) != null;
    }
}