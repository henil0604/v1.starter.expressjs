require("@Modules/LoadGlobals")

log(`--{${Config.App.name}}--`)

log("Importing App")
const App = require("@/Index");



App.listen(Config.App.PORT || 4001, () => {
    log(`Listening on {${Config.App.PORT}}`)
})