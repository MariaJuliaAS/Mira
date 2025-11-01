import { Request, Response } from "express";
import { ListCourseService } from "../../service/course/ListCourseService";


class ListCourseController {
    async handle(req: Request, res: Response) {
        const userId = req.query.userId as string;

        const listCourseService = new ListCourseService();
        const course = await listCourseService.execute(userId);

        return res.json(course);
    }
}

export { ListCourseController }