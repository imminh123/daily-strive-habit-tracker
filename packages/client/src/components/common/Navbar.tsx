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
import { signIn } from "next-auth/react";
import router from "next/router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TimePicker } from "./TimePicker";

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
  const { mutate: createTask } = useCreateTask();
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

  const onSubmit = async (input: CreateTask) => {
    const data = await createTask(input);
    // if (data.data) {
    //   router.push("/");
    // }
  };

  const handleCreateTask = () => {};

  useEffect(() => {
    watch('notificationToggle', true)
    const now = new Date()
    setValue('hour', now.getHours())
    setValue('minute', now.getMinutes())
    setValue('notificationToggle', true)
  }, [])

 
  return (
    <>
      <dialog id="create_custom_task_modal" className="modal">
        <div className="modal-box">
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
                <span className="label-text font-semibold text-lg">Notification</span>
                <input
                  type="checkbox"
                  className="toggle toggle-accent"
                  {...register("notificationToggle")}
                />
              </label>

                {getValues('notificationToggle') && 
                  <label className="label cursor-pointer w-full flex items-center mt-2">
                  <span className="label-text font-semibold text-lg whitespace-nowrap mr-5">Notification Time</span>
                    <input
                      type="number"
                      placeholder="Hour"
                      {...register("hour")}
                      className="input input-bordered input-primary w-full mr-2"
                    />
                    <input
                      type="number"
                      placeholder="Minute"
                      {...register("minute")}
                      className="input input-bordered input-primary w-full"
                    />
                  </label>
                }
              
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
              <button className="btn btn-primary ml-3">Create</button>
            </form>
          </div>
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
