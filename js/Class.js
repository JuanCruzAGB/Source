// ? JuanCruzAGB | Source package
import { Callback, Property, State, } from "@juancruzagb/src";

/**
 * * Controls a class object.
 * @export
 * @class Class
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 */
export default class Class {
    /**
     * * Creates an instance of Class.
     * @param {object} [data] Class data.
     * @param {object} [data.callbacks] Class callbacks.
     * @param {object} [data.props] Class properties.
     * @param {object} [data.state] Class state
     * @memberof Class
     */
    constructor (data = {
        callbacks: {},
        props: {},
        state: {},
    }) {
        this.callbacks = new Callback;
        this.props = new Property;
        this.state = new State;

        this.props.add((data && data.hasOwnProperty('props')) ? data.props : {});
        this.state.add((data && data.hasOwnProperty('state')) ? data.state : {});
        this.callbacks.add((data && data.hasOwnProperty('callbacks')) ? data.callbacks : {});
    }
}