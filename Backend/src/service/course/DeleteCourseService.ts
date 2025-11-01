import prismaClient from "../../prisma"


class DeleteCourseService {
    async execute(courseId: string) {
        if (!courseId) {
            throw new Error("The course ID is required.");
        }

        const course = await prismaClient.course.delete({
            where: {
                id: courseId
            }
        })

        if (!course) {
            throw new Error("Course not found or could not be deleted.");
        }

        return course;
    }
}

export { DeleteCourseService }