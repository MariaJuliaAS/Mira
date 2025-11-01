import prismaClient from "../../prisma"


class ListCourseService {
    async execute(userId: string) {

        if (!userId) {
            throw new Error("User ID is required");
        }

        const course = await prismaClient.course.findMany({
            where: {
                user_id: userId
            }
        })

        return course;
    }
}

export { ListCourseService }