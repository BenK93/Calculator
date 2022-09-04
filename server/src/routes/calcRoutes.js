"use strict";
exports.__esModule = true;
exports.CalculationsRoutes = void 0;
var express_1 = require("express");
var calculateController_1 = require("../controllers/calculateController");
var CalculationsRoutes = /** @class */ (function () {
    function CalculationsRoutes() {
        this.userController = new calculateController_1.CalculateController();
        this.router = (0, express_1.Router)();
        this.routes();
    }
    CalculationsRoutes.prototype.routes = function () {
        this.router.post("/div", this.userController.div);
        this.router.post("/multi", this.userController.multi);
        this.router.post("/add", this.userController.add);
        this.router.post("/sub", this.userController.sub);
        this.router.post("/pow", this.userController.pow);
    };
    return CalculationsRoutes;
}());
exports.CalculationsRoutes = CalculationsRoutes;
