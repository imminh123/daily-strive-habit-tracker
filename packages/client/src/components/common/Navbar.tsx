import React, { MouseEventHandler, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HomeIcon from "../../assets/icons/home.svg";
import MenuIcon from "../../assets/icons/menu.svg";
import PlusIcon from "../../assets/icons/plus.svg";
import TrophyIcon from "../../assets/icons/trophy.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import {
  CreateTask,
  CreateTaskSchema,
  useCreateTask,
} from "@/features/tasks/api/createTask";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuth } from "@/hook/useAuth";

const PlusButton = ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button className="rounded-full bg-blue p-2" onClick={onClick}>
      <Image src={PlusIcon} alt="Home icon" />
    </button>
  );
};

const NavbarButton = ({
  icon,
  alt,
  href,
}: {
  href: string;
  icon: any;
  alt: string;
}) => {
  return (
    <Link className="flex w-6 cursor-pointer items-center" href={href}>
      <Image src={icon} alt={alt} />
    </Link>
  );
};

export const Navbar = () => {
  const { mutate: createUserTask } = useCreateTask();
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
  console.log("🚀 ~ file: Navbar.tsx:55 ~ Navbar ~ errors:", errors)
  console.log("🚀 ~ file: Navbar.tsx:55 ~ Navbar ~ errors:", errors)

  useEffect(() => {
    watch("notificationToggle", true);
    watch("hour");
    watch("minute");
    const now = new Date();
    setValue("hour", now.getHours());
    setValue("minute", now.getMinutes());
    setValue("notificationToggle", true);
  }, []);

  const user = useAuth();
  const handleCreateUserTask = async (value: any) => {
    console.log("🚀 ~ file: Navbar.tsx:73 ~ handleCreateUserTask ~ value:", value)
    console.log("🚀 ~ file: Navbar.tsx:73 ~ handleCreateUserTask ~ value:", value)
    const result = await createUserTask({ ...value, user: user._id });
    handleCloseModal();
  };

  const handleCloseModal = () => {
    (document.getElementById("create_custom_task_modal") as any).close();
  };

  useEffect(() => {
    const notificationTime = new Date(
      2023,
      10,
      25,
      getValues("hour"),
      getValues("minute"),
    );
    console.log("🚀 ~ file: Navbar.tsx:89 ~ useEffect ~ notificationTime:", notificationTime)
    setValue("notificationTime", notificationTime);
  }, [getValues("hour"), getValues("minute")]);

  return (
    <>
      <dialog id="create_custom_task_modal" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(handleCreateUserTask)} method="dialog">
            <h3 className="text-lg font-bold">Create Your Custom Habit</h3>
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
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" onClick={handleCloseModal}>
                Close
              </button>
              <button className="btn btn-primary ml-3">Create</button>
            </div>
          </form>
        </div>
      </dialog>

      <div className="flex w-full justify-between  rounded-full bg-white px-8 py-2">
        <NavbarButton icon={HomeIcon} href="/" alt="Home icon" />
        <NavbarButton icon={MenuIcon} href="/todo" alt="Menu icon" />
        <PlusButton
          onClick={() =>
            (
              document.getElementById(
                "create_custom_task_modal",
              ) as HTMLDialogElement
            ).showModal()
          }
        />
        <NavbarButton icon={TrophyIcon} href="/topic" alt="Trophy icon" />
        <NavbarButton icon={SettingsIcon} href="/setting" alt="Setting icon" />
      </div>
    </>
  );
};
