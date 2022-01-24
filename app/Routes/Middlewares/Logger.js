const RouteNode = require("@Modules/RouteNode");


module.exports = class Logger$Middleware extends RouteNode {

    constructor() {
        super();

    }

    get Handler() {
        return (req, res, next) => {
            log(`${req.method} {${req.originalUrl}}`, "log", '[ROUTE]')

            next();
        }
    }

    get Type() {
        return 'middleware';
    }

}