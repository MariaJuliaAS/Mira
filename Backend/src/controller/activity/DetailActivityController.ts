import { Request, Response } from "express";
import { DetailActivityService } from "../../service/activity/DetailActivityService";


class DetailActivityController {
    async handle(req: Request, res: Response) {
        const activityId = req.query.activityId as string;

        const listActivityService = new DetailActivityService();
        const activities = await listActivityService.execute(activityId);

        return res.json(activities);
    }
}

export { DetailActivityController }