import prismaClient from "../../prisma"


class DeleteActivityService {
    async execute(activityId: string) {
        if (!activityId) {
            throw new Error("Activity ID incorrect")
        }

        const activity = await prismaClient.activity.delete({
            where: {
                id: activityId
            }
        })

        return activity;
    }
}

export { DeleteActivityService }