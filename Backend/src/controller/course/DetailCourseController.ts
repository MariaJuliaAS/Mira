import { Request, Response } from "express";
import { DetailCourseService } from "../../service/course/DetailCourseService";


class DetailCourseController {
    async handle(req: Request, res: Response) {
        const courseId = req.query.courseId as string;

        const detailCourseService = new DetailCourseService();
        const course = await detailCourseService.execute(courseId);

        return res.json(course);
    }
}

export { DetailCourseController }