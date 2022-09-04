import { Request, Response } from "express";


export class CalculateController {
    private static greenRedAnswer(result: number) {
        if (result % 2 == 0) {
            return {result, color: "green"};
        } else {
            return {result, color: "red"};
        }
    }

    public async div(req: Request, res: Response) {
        const x: any = req.query.x;
        const y: any = req.query.y;
        const result = parseFloat(x) / parseFloat(y);
        res.status(200).json(CalculateController.greenRedAnswer(result));
    }

    public async pow(req: Request, res: Response) {
        const x: any = req.query.x;
        const y: any = req.query.y;
        const result = Math.pow(parseFloat(x), parseFloat(y));
        res.status(200).json(CalculateController.greenRedAnswer(result));
    }

    public async add(req: Request, res: Response) {
        const x: any = req.query.x;
        const y: any = req.query.y;
        const result = parseFloat(x) + parseFloat(y);
        res.status(200).json(CalculateController.greenRedAnswer(result));
    }

    public async sub(req: Request, res: Response) {
        const x: any = req.query.x;
        const y: any = req.query.y;
        const result = parseFloat(x) - parseFloat(y);
        res.status(200).json(CalculateController.greenRedAnswer(result));
    }

    public async multi(req: Request, res: Response) {
        const x: any = req.query.x;
        const y: any = req.query.y;
        const result = parseFloat(x) * parseFloat(y);
        res.status(200).json(CalculateController.greenRedAnswer(result));

    }
}



