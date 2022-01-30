module.exports = [
    require("@Routes/Middlewares/Enhancer"),
    require("@Routes/Middlewares/Logger"),
    require("@Routes/Root"),


    // AFTER ALL HANDLERS
    require("@Routes/Middlewares/PostRequest"),
]