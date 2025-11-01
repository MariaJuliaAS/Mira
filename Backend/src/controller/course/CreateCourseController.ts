import { Request, Response } from "express";
import { CreateCourseService } from "../../service/course/CreateCourseService";


class CreateCourseController {
    async handle(req: Request, res: Response) {
        const { name } = req.body;
        const userId = req.query.userId as string;

        const createCourseService = new CreateCourseService();
        const course = await createCourseService.execute({ name, userId })

        return res.json(course);
    }
}

export { CreateCourseController }