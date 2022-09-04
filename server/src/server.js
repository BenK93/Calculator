"use strict";
exports.__esModule = true;
var express_1 = require("express");
var compression_1 = require("compression");
var cors_1 = require("cors");
var calcRoutes_1 = require("./routes/calcRoutes");
var Server = /** @class */ (function () {
    function Server() {
        this.app = (0, express_1["default"])();
        this.config();
        this.routes();
    }
    Server.prototype.routes = function () {
        this.app.use("/api/calc", new calcRoutes_1.CalculationsRoutes().router);
    };
    Server.prototype.config = function () {
        this.app.set("port", process.env.PORT || 8000);
        this.app.use(express_1["default"].json());
        this.app.use(express_1["default"].urlencoded({ extended: false }));
        this.app.use((0, compression_1["default"])());
        this.app.use((0, cors_1["default"])());
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get("port"), function () {
            console.log("  API is running at http://localhost:%d", _this.app.get("port"));
        });
    };
    return Server;
}());
var server = new Server();
server.start();
