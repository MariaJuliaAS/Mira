import { Request, Response } from "express";
import { CreateActivityService } from "../../service/activity/CreateActivityService";


class CreateActivityController {
    async handle(req: Request, res: Response) {
        const { title, priority, date } = req.body;
        const courseId = req.query.courseId as string;

        const createActivityService = new CreateActivityService();
        const activity = await createActivityService.execute({
            title,
            priority,
            date,
            courseId
        })

        return res.json(activity);
    }
}

export { CreateActivityController }