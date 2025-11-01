import { Request, Response } from "express";
import { DetailUserService } from "../../service/user/DetailUserService";


class DetailUserController {
    async handle(req: Request, res: Response) {
        const userId = req.query.userId as string;

        const detailUserService = new DetailUserService();
        const user = await detailUserService.execute(userId);

        return res.json(user);
    }
}

export { DetailUserController }