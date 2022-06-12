// ? JuanCruzAGB repository
import Class from "@juancruzagb/src/js/Class.js";

/**
 * * Fetch gives an excellent fetch service.
 * @export
 * @class Fetch
 * @extends Class
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 */
export default class Fetch extends Class {
    /**
     * * Creates an instance of Fetch.
     * @param {object} [data]
     * @param {object} [data.request]
     * @param {object} [data.request.body]
     * @param {object} [data.request.credentials="same-origin"]
     * @param {object} [data.request.headers]
     * @param {string} [data.request.method="GET"]
     * @param {string} [data.request.url="/api"]
     * @memberof Fetch
     */
    constructor (data = {
        request: {
            body: {},
            credentials: "same-origin",
            headers: {},
            method: "GET",
            url: "/api",
        },
    }) {
        super();
        this.setRequest({ ...Fetch.request, ...((data && data.hasOwnProperty("request")) ? data.request : {}) });
    }

    /**
     * * Set the Fetch request.
     * @param {object|string} request
     * @param {*} [value=null] Fetch request property value.
     * @memberof Class
     */
    setRequest (request = {
        body: {},
        credentials: "same-origin",
        headers: {},
        method: "GET",
        url: "/api",
    }, value = null) {
        if (!this.hasOwnProperty("request")) {
            this.request = {
                body: {},
                credentials: "same-origin",
                headers: {},
                method: "GET",
                url: "/api",
            };
        }
        if (typeof request == "string") {
            this.request[request] = value;
            return true;
        }
        if (request instanceof Object) {
            for (const key in request) {
                if (Object.hasOwnProperty.call(request, key)) {
                    const value = request[key];
                    this.request[key] = value;
                }
            }
            return true;
        }
        console.warn("You are not setting any request property");
        return false;
    }

    /**
     * * Set the Fetch response.
     * @param {object|string} response
     * @param {*} [value=null] Fetch response property value.
     * @memberof Class
     */
    setResponse (response = {}, value = null) {
        if (!this.hasOwnProperty("response")) {
            this.response = {};
        }
        if (typeof response == "string") {
            this.response[response] = value;
            return true;
        }
        if (response instanceof Object) {
            for (const key in response) {
                if (Object.hasOwnProperty.call(response, key)) {
                    const value = response[key];
                    this.response[key] = value;
                }
            }
            return true;
        }
        console.warn("You are not setting any response property");
        return false;
    }

    async query () {
        if (this.request.url != null) {
            if (["DELETE", "GET", "PATCH", "POST", "PUT"].indexOf(this.request.method.toUpperCase())) {
                this.setState("query", false);
                await fetch(this.request.url, {
                    body: JSON.stringify(this.request.body),
                    credentials: this.request.credentials,
                    headers: this.request.headers,
                    method: this.request.method.toUpperCase(),
                }).then(response => {
                    this.setState("query", true);
                    console.log(response);
                }).catch(error => {
                    this.setState("query", true);
                    console.log(error);
                });
                return true;
            }
            throw new Error("The method is not supported");
            return false;
        }
        if (this.request.url == null) {
            throw new Error("The URL is required");
            return false;
        }
    }

    /**
     * * Get data from an specific URL.
     * @async
     * @static
     * @param {string} URL Fetch URL to get data.
     * @param {*} headers Fetch URL headers.
     * @returns {Fetch}
     * @memberof Fetch
     */
    static async get (URL, headers = {}) {
        let instance = new this({
            url: URL,
            method: "GET"
        });
        if (URL != null) {
            let withHeaders = false;
            for (const key in headers) {
                if (headers.hasOwnProperty(key)) {
                    withHeaders = true;
                    break;
                }
            }
            if (withHeaders) {
                await fetch(URL, {
                    headers: headers,
                    credentials: "same-origin",
                    method: "GET",
                }).then(response => response.json())
                    .then(data => {
                        instance.setResponse(data);
                    }).catch(error => {
                        console.error(error);
                });
            } else {
                await fetch(URL).then(response => response.json())
                    .then(data => {
                        instance.setResponse(data);
                    }).catch(error => {
                        console.error(error);
                });
            }
        } else {
            throw new Error("The URL is required");
        }
        return instance;
    }

    /**
     * * Send data from an specific URl.
     * @async
     * @static
     * @param {object} props Fetch properties:
     * @param {string} props.url Fetch URL.
     * @param {string} props.method Fetch method.
     * @param {*} headers Fetch URL headers.
     * @param {FormData} formdata Data to send.
     * @returns {Fetch}
     * @memberof Fetch
     */
    static async send (props = {
        url: "",
        method: "",
    }, headers = {}, formdata = []) {
        let parsedFormData = {};
        for (const input of formdata) {
            parsedFormData[input[0]] = input[1];
        }
        let instance = new this({
            url: props.url,
            method: props.method
        });
        if (instance.props.url != "" && instance.props.method != "GET") {
            await fetch(instance.props.url, {
                headers: headers,
                credentials: "same-origin",
                method: instance.props.method,
                body: JSON.stringify(parsedFormData),
            }).then(response => response.json())
                .then(data => {
                    instance.setResponse(data);
                }).catch(error => {
                    console.error(error);
            });
        } else {
            throw new Error("The URL & Method are required");
        }
        return instance;
    }

    /**
     * @static
     * @var {object} request Default request.
     */
    static request = {
        body: {},
        credentials: "same-origin",
        headers: {},
        method: "GET",
        url: "/api",
    }
}