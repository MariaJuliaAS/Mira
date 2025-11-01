import prismaClient from "../../prisma";

interface CourseRequest {
    name: string;
    courseId: string;
}

class EditCourseService {
    async execute({ name, courseId }: CourseRequest) {
        if (!courseId) {
            throw new Error("The course ID is required.");
        }

        const course = await prismaClient.course.update({
            where: {
                id: courseId
            },
            data: {
                name
            }
        })

        if (!course) {
            throw new Error("Course not found or could not be updated.");
        }

        return course;
    }
}

export { EditCourseService }