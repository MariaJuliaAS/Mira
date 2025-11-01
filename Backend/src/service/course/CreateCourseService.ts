import prismaClient from "../../prisma";

interface CourseRequest {
    name: string;
    userId: string;
}

class CreateCourseService {
    async execute({ name, userId }: CourseRequest) {
        if (!userId) {
            throw new Error("The user ID is required.");
        }

        const course = await prismaClient.course.create({
            data: {
                name,
                user_id: userId,
            }
        })

        return course;
    }
}

export { CreateCourseService }