import prismaClient from "../../prisma";

interface AcitivyRequest {
    title: string;
    priority: string;
    date: string;
    courseId: string;
}

class CreateActivityService {
    async execute({ title, priority, date, courseId }: AcitivyRequest) {
        if (!courseId) {
            throw new Error("Course ID is required");
        }

        const activity = await prismaClient.activity.create({
            data: {
                title,
                priority,
                date,
                course_id: courseId
            }
        })

        return activity;
    }
}

export { CreateActivityService }