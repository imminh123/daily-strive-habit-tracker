import { Router } from "express";
import { adminProcedure, t } from "../trpc";
import { HomeController, appKeyValidator } from "@/components/home";
import { UserController } from "@/components/user/controller";
import { sanitizer } from "@/helpers";
import { signInCheck } from "@/middlewares/signInCheck";
import { userRouter } from "./user";

export const appRouter = t.router({
  sayHi: t.procedure.query(() => {
    return "Hi";
  }),
  log: t.procedure
    .input((v) => {
      if (typeof v === "string") return v;
      throw new Error("Invalid input");
    })
    .mutation((req) => {
      console.log(req.input);
      return true;
    }),
  secretData: adminProcedure.query(({ ctx }) => {
    console.log(ctx.user);
    return "Super secret";
  }),
  user: userRouter,
});

export type AppRouter = typeof appRouter;

const router = Router();

router.get("/", sanitizer(appKeyValidator), HomeController.getAppInfo);

// Users
router.get(
  "/users",
  signInCheck,
  sanitizer(appKeyValidator),
  UserController.getUsers,
);
router.post("/users", sanitizer(appKeyValidator), UserController.createUser);
router.post("/signin", sanitizer(appKeyValidator), UserController.signInUser);
router.delete(
  "/signout",
  signInCheck,
  sanitizer(appKeyValidator),
  UserController.signOutUser,
);
export default router;
