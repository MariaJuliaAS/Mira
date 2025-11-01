import { Request, Response } from "express";
import { DeleteCourseService } from "../../service/course/DeleteCourseService";

class DeleteCourseController {
    async handle(req: Request, res: Response) {
        const courseId = req.query.courseId as string;

        const deleteCourseService = new DeleteCourseService();
        const course = await deleteCourseService.execute(courseId);

        return res.json(course);

    }
}

export { DeleteCourseController }