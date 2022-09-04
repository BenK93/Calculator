import { Router } from "express";
import { CalculateController } from "../controllers/calculateController";

export class CalculationsRoutes {

    router: Router;
    public userController: CalculateController = new CalculateController();

    constructor() {
        this.router = Router();
        this.routes();
    }
    routes() {
        this.router.get("/div", this.userController.div);
        this.router.get("/multi", this.userController.multi);
        this.router.get("/add", this.userController.add);
        this.router.get("/sub", this.userController.sub);
        this.router.get("/pow", this.userController.pow);
    }
}
