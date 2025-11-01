import prismaClient from "../../prisma";


class DetailCourseService {
    async execute(courseId: string) {
        if (!courseId) {
            throw new Error("Course ID is required");
        }

        const course = await prismaClient.course.findFirst({
            where: {
                id: courseId
            },
            include: {
                activities: true
            }
        })

        return course;
    }
}

export { DetailCourseService }