import { Router } from "express";
import { adminProcedure, t } from "../trpc";
import { HomeController, appKeyValidator } from "@/components/home";
import { UserController } from "@/components/user/controller";
import { sanitizer } from "@/helpers";
import { signInCheck } from "@/middlewares/signInCheck";
import { userRouter } from "./user";
import { TopicController } from "@/components/topic/controller";
import { TaskController } from "@/components/task/controlller";
import { UserTaskController } from "@/components/userTask/controlller";
import { LogController } from "@/components/log/controller";

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
router.delete(
  "/users/:id",
  sanitizer(appKeyValidator),
  UserController.deleteUser,
);
router.put("/users/:id", sanitizer(appKeyValidator), UserController.updateUser);

//Topics
router.get("/topics", sanitizer(appKeyValidator), TopicController.getTopics);
router.post("/topics", sanitizer(appKeyValidator), TopicController.createTopic);
router.delete(
  "/topics/:id",
  sanitizer(appKeyValidator),
  TopicController.deleteTopic,
);
router.put(
  "/topics/:id",
  sanitizer(appKeyValidator),
  TopicController.updateTopic,
);

//Tasks
router.get("/tasks", sanitizer(appKeyValidator), TaskController.getTasks);
router.post("/tasks", sanitizer(appKeyValidator), TaskController.createTask);
router.delete(
  "/tasks/:id",
  sanitizer(appKeyValidator),
  TaskController.deleteTask,
);

router.put("/tasks/:id", sanitizer(appKeyValidator), TaskController.updateTask);

//User Tasks
router.get(
  "/userTasks",
  sanitizer(appKeyValidator),
  UserTaskController.getUserTasks,
);
router.get(
  "/userTasksByUserId/:id",
  sanitizer(appKeyValidator),
  UserTaskController.getUserTasksByUserId,
);
router.get(
  "/userTasksByNameForUser/:id/:taskName",
  sanitizer(appKeyValidator),
  UserTaskController.getUserTasksByNameForUser,
);
router.get(
  "/userTasksByDescriptionForUser/:id/:description",
  sanitizer(appKeyValidator),
  UserTaskController.getUserTasksByDescriptionForUser,
);
router.get(
  "/dailyProgress/:id/",
  sanitizer(appKeyValidator),
  UserTaskController.getDailyProgress,
);
router.put(
  "/completeUserTask/:id/",
  sanitizer(appKeyValidator),
  UserTaskController.completeUserTask,
);
router.post(
  "/userTasks",
  sanitizer(appKeyValidator),
  UserTaskController.createUserTask,
);
router.delete(
  "/userTasks/:id",
  sanitizer(appKeyValidator),
  UserTaskController.deleteUserTask,
);
router.put(
  "/userTasks/:id",
  sanitizer(appKeyValidator),
  UserTaskController.updateUserTask,
);
//for email notification link (temporary)
router.get(
  "/completeUserTask/:id/",
  sanitizer(appKeyValidator),
  UserTaskController.completeUserTaskEmail,
);

router.post(
  "/logs",
  sanitizer(appKeyValidator),
  LogController.createLog,
);

export default router;
