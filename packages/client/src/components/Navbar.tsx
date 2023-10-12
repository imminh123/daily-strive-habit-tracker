import React from "react";
import Image from "next/image";
import Link from "next/link";
import HomeIcon from "../assets/icons/home.svg";
import MenuIcon from "../assets/icons/menu.svg";
import PlusIcon from "../assets/icons/plus.svg";
import TrophyIcon from "../assets/icons/trophy.svg";
import SettingsIcon from "../assets/icons/settings.svg";

const PlusButton = () => {
  return (
    <button className="rounded-full bg-blue p-2">
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
    <Link className="w-6 cursor-pointer flex items-center" href={href}>
      <Image src={icon} alt={alt} />
    </Link>
  );
};

export const Navbar = () => {
  return (
    <div className="flex w-full justify-between  rounded-full bg-white px-8 py-2">
      <NavbarButton icon={HomeIcon} href="/" alt="Home icon" />
      <NavbarButton icon={MenuIcon} href="/todo" alt="Menu icon" />
      <PlusButton />
      <NavbarButton icon={TrophyIcon} href="/topic" alt="Trophy icon" />
      <NavbarButton icon={SettingsIcon} href="/setting" alt="Setting icon" />
    </div>
  );
};
