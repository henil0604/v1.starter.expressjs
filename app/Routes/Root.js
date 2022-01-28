const RouteNode = require("@Modules/RouteNode");


module.exports = class Root extends RouteNode {

    constructor() {
        super();

    }

    get Handler() {
        return (req, res, next) => {

            throw new this.Response({
                status: 200,
                message: "Hello World!"
            });

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