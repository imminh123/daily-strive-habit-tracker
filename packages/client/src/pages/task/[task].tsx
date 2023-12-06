import {
    CreateTask,
    CreateTaskSchema,
    useCreateTask,
  } from "@/features/tasks/api/createTask";
  import { useGetOneTask } from "@/features/tasks/api/getListTask";
  import { useAuth } from "@/hook/useAuth";
  import { zodResolver } from "@hookform/resolvers/zod";
  import Head from "next/head";
  import { useRouter } from "next/router";
  import { useEffect } from "react";
  import { useForm } from "react-hook-form";
  
  const TaskListPage = () => {
    const { query, back, push } = useRouter();
    const { data } = useGetOneTask(query.task as string);
  
    const {
      register,
      handleSubmit,
      setValue,
      getValues,
      watch,
    } = useForm<CreateTask>({
      resolver: zodResolver(CreateTaskSchema),
    });
    useEffect(() => {
      watch("notificationToggle", true);
      watch("hour");
      watch("minute");
      const now = new Date();
      setValue("hour", now.getHours());
      setValue("minute", now.getMinutes());
      setValue("name", data?.data.name);
      setValue("description", data?.data.description);
      setValue("minute", now.getMinutes());
      setValue("notificationToggle", true);
    }, [data]);
  
    const { mutateAsync: createUserTask } = useCreateTask();
    const user = useAuth()
    const handleCreateUserTask = async (value: any) => {
      const result = await createUserTask({...value, user: user._id});
      if (result.data) push("/");
    };
  
    useEffect(() => {
      const notificationTime = new Date(
        2023,
        10,
        25,
        getValues("hour"),
        getValues("minute"),
      );
      setValue("notificationTime", notificationTime);
    }, [getValues("hour"), getValues("minute")]);
  
    return (
      <>
        <Head>
          <title>Task List</title>
          <meta name="description" content="Task list" />
        </Head>
        <main className="relative flex flex-col items-center bg-primary">
          <header className="py-3">
            <h1 className="text-center text-2xl font-semibold text-white">
              {data?.data.name}
            </h1>
          </header>
          <p className="text-center text-white">{data?.data.description}</p>
  
          <div className="modal-box mt-5 w-full">
            <form onSubmit={handleSubmit(handleCreateUserTask)}>
              <h1 className="self-start text-xl font-semibold">About</h1>
              <input
                type="text"
                placeholder="Name"
                {...register("name")}
                className="input input-bordered input-primary mt-3 w-full text-lg"
              />
              <textarea
                rows={5}
                placeholder="Description"
                {...register("description")}
                className="textarea input-bordered input-primary mt-3 w-full text-lg"
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
                {/* if there is a button in form, it will close the modal */}
                <button className="btn ml-3 w-28" type="button" onClick={back}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary ml-3 w-28">
                  Save
                </button>
              </div>
            </form>
          </div>
        </main>
      </>
    );
  };
  
  export default TaskListPage;
  