import ProgressCircle from "@/components/common/ProgressCircle";
import { CreateTask, CreateTaskSchema } from "@/features/tasks/api/createTask";
import { zodResolver } from "@hookform/resolvers/zod";
import Head from "next/head";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const TaskListPage = ({ taskId }: { taskId: string }) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<CreateTask>({
    resolver: zodResolver(CreateTaskSchema),
  });

  useEffect(() => {
    watch("notificationToggle", true);
    const now = new Date();
    setValue("hour", now.getHours());
    setValue("minute", now.getMinutes());
    setValue("name", "Morning Run");
    setValue("name", "Kick start your day with a morning run");
    setValue("minute", now.getMinutes());
    setValue("notificationToggle", true);
  }, []);

  return (
    <>
      <Head>
        <title>Task List</title>
        <meta name="description" content="Task list" />
      </Head>
      <main className="relative flex flex-col items-center bg-primary p-3">
        <header className="py-1">
          <h1 className="text-center text-2xl font-semibold text-white">
            Morning Run
          </h1>
        </header>
        <p className="text-white">Kick start your day with a morning run</p>
        <div className="mt-5 w-full rounded-xl bg-white px-5 py-3">
          <h1 className="self-start text-xl font-semibold">About</h1>
          <input
            type="text"
            placeholder="Name"
            {...register("name")}
            className="input input-bordered input-primary mt-3 w-full"
          />
          <input
            type="text"
            placeholder="Description"
            {...register("description")}
            className="input input-bordered input-primary mt-3 w-full"
          />
          <div className="mt-2 flex flex-col">
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text text-lg font-semibold">
                  Notification
                </span>
                <input
                  type="checkbox"
                  className="toggle toggle-accent"
                  {...register("notificationToggle")}
                />
              </label>

              {getValues("notificationToggle") && (
                <label className="label mt-2 flex w-full cursor-pointer items-center">
                  <span className="label-text mr-5 whitespace-nowrap text-lg font-semibold">
                    Notification Time
                  </span>
                  <input
                    type="number"
                    placeholder="Hour"
                    {...register("hour")}
                    className="input input-bordered input-primary mr-2 w-full"
                  />
                  <input
                    type="number"
                    placeholder="Minute"
                    {...register("minute")}
                    className="input input-bordered input-primary w-full"
                  />
                </label>
              )}
            </div>
          </div>
          <button className="btn btn-primary float-right mt-2 w-28">
            Save
          </button>
        </div>

        <div className="my-2 flex items-center w-full rounded-xl bg-white px-5 py-3">
          <p className="mt-1 flex flex-col text-center font-semibold text-accent mr-5">
            <span className="text-3xl">6</span> <span>times</span>
          </p>
          <div>
            <span className="mt-1 block">You have completed this activity</span>
            <span className="block">this week</span>
          </div>
        </div>

        <section className="flex w-full flex-col items-center rounded-xl bg-white bg-confetti bg-cover bg-no-repeat p-5">
          <h1 className="self-start text-xl font-semibold">Goal preview</h1>
          <div className="flex w-full justify-between px-10">
            <div className="flex flex-col items-center p-1">
              <ProgressCircle
                value={80}
                max={100}
                size={100}
                strokeWidth={11}
                fontSize={25}
                color="black"
              />
              <span className="mt-2 block font-semibold">Progress</span>
            </div>

            <div className="flex flex-col items-center p-1">
              <ProgressCircle
                value={80}
                max={100}
                size={100}
                strokeWidth={11}
                color="black"
                text="5"
                fontSize={35}
              />
              <span className="mt-2 block text-center font-semibold">
                Current Streak
              </span>
            </div>
          </div>
          <button className="btn btn-accent mt-6 w-3/5 rounded-full text-white">
            Complete Habit
          </button>
        </section>
      </main>
    </>
  );
};

export default TaskListPage;
