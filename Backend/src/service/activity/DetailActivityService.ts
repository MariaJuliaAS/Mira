import prismaClient from "../../prisma"


class DetailActivityService {
    async execute(activityId: string) {
        if (!activityId) {
            throw new Error("Activity ID incorrect")
        }

        const activities = await prismaClient.activity.findMany({
            where: {
                id: activityId
            }
        })

        return activities;
    }
}

export { DetailActivityService }