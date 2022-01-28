const urlJoin = require("proper-url-join").default;
const JOI = require("joi");
const Express = require("express");
const Response = require("@Modules/Response");

const ValidateConfig = (Config = {}) => {
    const ConfigSchema = JOI.object({
        autoCreate: JOI.boolean().default(true),
    })

    const Data = ConfigSchema.validate(Config);

    if (Data.error) {
        throw new Error(Data.error.message);
    }

    return Data.value;
}


class RouteNode {

    constructor(Config) {

        this.Response = Response;
        this.Config = ValidateConfig(Config);

        if (this.Config.autoCreate) {
            this.create();
        }
    }

    create() {
        log(`Creating {${this.FullPath || "*"}} [{${this.Type}}]`, "log", "[RouteNode]");

        if (this.Type === "route") {
            const Route = App.route(this.FullPath);

            let Methods = this.Method;

            if (typeof Methods === "string") {
                Methods = [Methods];
            }

            Methods.forEach(method => {
                method = method.toLowerCase();

                let MethodFunction = Route[method]

                MethodFunction.call(Route, this._Handler)
            });

        }

        if (this.Type === "static") {
            App.use(this.FullPath, Express.static(this.StaticPath));
        }

        if (this.Type === "middleware") {
            if (this.FullPath === null) {
                App.use(this._Handler);
            } else {
                App.use(this.FullPath, this._Handler);
            }
        }
    }

    get _Handler() {
        const Handler = this.Handler;

        const _Handler = async (req, res, next) => {
            try {
                await Handler(req, res, next);
            } catch (error) {
                if (error instanceof Response) {
                    res.send(error.data);
                } else {
                    throw error;
                }

            }
        }

        return _Handler;
    }

    get Handler() {
        return (req, res, next) => {
            res.send("Hello World!");
        }
    }

    get FullPath() {
        return urlJoin(
            this.Base,
            this.Path,
            { leadingSlash: true, trailingSlash: false }
        );
    }

    get Path() {
        return '/';
    }

    get Type() {
        return 'route';
    }

    get Method() {
        return "all";
    }

    get Base() {
        return '/';
    }

    get StaticPath() {
        return null;
    }

}

module.exports = RouteNode;
