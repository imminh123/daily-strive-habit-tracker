import React, { MouseEventHandler } from "react";
import Image from "next/image";
import Link from "next/link";
import HomeIcon from "../../assets/icons/home.svg";
import MenuIcon from "../../assets/icons/menu.svg";
import PlusIcon from "../../assets/icons/plus.svg";
import TrophyIcon from "../../assets/icons/trophy.svg";
import SettingsIcon from "../../assets/icons/settings.svg";

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
  return (
    <>
      <dialog id="create_custom_task_modal" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Custom task</h3>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered input-primary mt-3 w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Description"
            className="input input-bordered input-primary mt-3 w-full max-w-xs"
          />
          <div className="flex flex-col mt-2">
            <div className="form-control w-52">
              <label className="label cursor-pointer">
                <span className="label-text">Repeat</span>
                <input
                  type="checkbox"
                  className="toggle toggle-accent"
                  checked
                />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">Remember me</span>
                <input
                  type="checkbox"
                  className="toggle toggle-accent"
                  checked
                />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">Remember me</span>
                <input
                  type="checkbox"
                  className="toggle toggle-accent"
                  checked
                />
              </label>
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
            document.getElementById("create_custom_task_modal")!.showModal()
          }
        />
        <NavbarButton icon={TrophyIcon} href="/topic" alt="Trophy icon" />
        <NavbarButton icon={SettingsIcon} href="/setting" alt="Setting icon" />
      </div>
    </>
  );
};
