import { Request, Response, Router } from "express";
import { CreateUserController } from "./controller/user/CreateUserController";
import { AuthUserController } from "./controller/user/AuthUserController";
import { DetailUserController } from "./controller/user/DetailUserController";
import { isAuthenticated } from "./middleware/isAuthenticated";
import { CreateCourseController } from "./controller/course/CreateCourseController";
import { EditCourseController } from "./controller/course/EditCourseController";
import { DeleteCourseController } from "./controller/course/DeleteCourseController";
import { ListCourseController } from "./controller/course/ListCourseController";
import { DetailCourseController } from "./controller/course/DetailCourseController";
import { CreateActivityController } from "./controller/activity/CreateActivityController";
import { DeleteActivityController } from "./controller/activity/DeleteActivityController";
import { DetailActivityController } from "./controller/activity/DetailActivityController";

const router = Router();

router.get("/teste", (req: Request, res: Response) => {
    res.json({ ok: true })
})

//User
router.post("/users", new CreateUserController().handle);
router.post("/users/login", new AuthUserController().handle);
router.get("/users/me", isAuthenticated, new DetailUserController().handle)

//Course
router.post("/courses", isAuthenticated, new CreateCourseController().handle)
router.put("/courses", isAuthenticated, new EditCourseController().handle)
router.delete("/courses", isAuthenticated, new DeleteCourseController().handle)
router.get("/courses/all", isAuthenticated, new ListCourseController().handle)
router.get("/course", isAuthenticated, new DetailCourseController().handle)

//Activity
router.post("/activities", isAuthenticated, new CreateActivityController().handle)
router.delete("/activities", isAuthenticated, new DeleteActivityController().handle)
router.get("/activities", isAuthenticated, new DetailActivityController().handle)

export { router };