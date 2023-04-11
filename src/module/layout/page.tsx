import React from "react";
import { Footer } from "./main/footer";
import { Nav } from "./main/nav";
interface IProps {
  children: React.ReactNode;
  data: any
}
export const MainLayout: React.FC<IProps> = ({ children, data }) => {
  return (
    <div className=" w-[100%] mx-auto sm:w-[80%] sm:mx-auto md:w-[80%] md:mx-auto lg:w-[80%] ">
      <Nav data={data} />
      {children}
      <Footer />
    </div>
  );
};
