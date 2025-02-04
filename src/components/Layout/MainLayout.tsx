import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const MainLayout = ({ children,header }: { header:string,children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="max-w-[calc(100%-240px)] p-2 md:p-3 lg:px-4 lg:py-0 w-full">
        <Header header={header} />
        <div className="h-[calc(100vh-120px)] overflow-auto">

        {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
