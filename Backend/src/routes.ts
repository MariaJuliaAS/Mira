import { Request, Response, Router } from "express";
import { CreateUserController } from "./controller/user/CreateUserController";

const router = Router();

router.get("/teste", (req: Request, res: Response) => {
    res.json({ ok: true })
})

//User
router.post("/users", new CreateUserController().handle);

export { router };