import { Request, Response, Router } from "express";
import { CreateUserController } from "./controller/user/CreateUserController";
import { AuthUserController } from "./controller/user/AuthUserController";
import { DetailUserController } from "./controller/user/DetailUserController";
import { isAuthenticated } from "./middleware/isAuthenticated";

const router = Router();

router.get("/teste", (req: Request, res: Response) => {
    res.json({ ok: true })
})

//User
router.post("/users", new CreateUserController().handle);
router.post("/users/login", new AuthUserController().handle);
router.get("/users/me", isAuthenticated, new DetailUserController().handle)

export { router };