import { Request, Response } from "express";
import { DeleteActivityService } from "../../service/activity/DeleteActivityService";


class DeleteActivityController {
    async handle(req: Request, res: Response) {
        const activityId = req.query.activityId as string;

        const deleteActivityService = new DeleteActivityService();
        const activity = await deleteActivityService.execute(activityId);

        return res.json(activity);
    }
}

export { DeleteActivityController }