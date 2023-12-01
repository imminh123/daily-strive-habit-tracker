import { Search } from "@/components/common/Search";
import { CreateTask, CreateTaskSchema } from "@/features/tasks/api/createTask";
import { StaticTaskItem } from "@/features/tasks/components/StaticTaskItem";
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
      <main className="relative flex flex-col items-center bg-primary">
        <header className="py-3">
          <h1 className="text-center text-2xl font-semibold text-white">
            Morning Run
          </h1>
        </header>
        <p className="text-white">Kick start your day with a morning run</p>

        <div>
          <div className="modal-box mt-5 w-full">
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
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn ml-3 w-28">Cancel</button>
                <button className="btn btn-primary ml-3 w-28">Save</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TaskListPage;
