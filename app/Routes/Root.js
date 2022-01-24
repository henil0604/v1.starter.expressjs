const RouteNode = require("@Modules/RouteNode");


module.exports = class Root extends RouteNode {

    constructor() {
        super();

    }

    get Handler() {
        return (req, res, next) => {
            res.send('Hello World!');
        }
    }

    get Path() {
        return '/';
    }

    get Base() {
        return '/';
    }

    get Type() {
        return 'route';
    }

}