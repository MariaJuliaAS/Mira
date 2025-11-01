import { Request, Response } from "express";
import { EditCourseService } from "../../service/course/EditCourseService";


class EditCourseController {
    async handle(req: Request, res: Response) {
        const { name } = req.body;
        const courseId = req.query.courseId as string;

        const editCourseService = new EditCourseService();
        const course = await editCourseService.execute({ name, courseId });

        return res.json(course);
    }
}

export { EditCourseController }