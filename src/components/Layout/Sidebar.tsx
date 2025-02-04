/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import ArticleIcon from "@mui/icons-material/Article";
import FolderIcon from "@mui/icons-material/Folder";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import SubjectIcon from "@mui/icons-material/Subject";
import Link from "next/link";
import Image from "next/image";
import assets from "@/assets";

const Sidebar = () => {
  const patientLinks = [
    { name: "Dashboard", href: "/dashboard", icon: <DashboardIcon /> },
    {
      name: "Book Appointment",
      href: "/book-appointment",
      icon: <CalendarMonthIcon />,
    },
    { name: "My Appointments", href: "/appointments", icon: <BeenhereIcon /> },
    { name: "Prescriptions", href: "/prescriptions", icon: <ArticleIcon /> },
    // { name: "Medical Records", href: "/medical-records", icon: <FolderIcon /> },
    { name: "Help & Support", href: "/help", icon: <LiveHelpIcon /> },
  ];

  return (
    <div className="max-w-[240px] w-full p-1 md:p-3 lg:px-4 lg:py-5 rounded-[12px] bg-sidebar-bg h-[calc(100vh-30px)] shadow-lg">
      <Link href="/#" className="flex items-center space-x-3 px-3 mt-4 mb-8 ">
        <Image
          src={assets.MainLogo}
          alt="main logo"
          width={200}
          height={200}
          className="size-[36px]"
        />

        <span className="font-ubuntu text-nowrap text-[24px] md:text-[36px] lg:text-[42px]">
          Medico
        </span>
      </Link>
      <ul className="space-y-0 w-full">
        {patientLinks.map((item, index) => (
          <li key={index} className="w-full">
            <Link
              href={item.href}
              className="px-4 py-2 rounded-md w-full hover:bg-slate-800 flex space-x-2 hover:text-white"
            >
              {" "}
              <i>{item.icon}</i> <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
