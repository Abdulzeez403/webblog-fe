import AppPagination from "@/components/pagenation/pagination";
import React from "react";
import { MainLayout } from "../layout/page";
import { DetailPage } from "./detail";
import { IBlog } from "./models";

interface IProps {
  blogs: IBlog[];
  isLoading: boolean;
  isItemLoading: any;
  category?: string;
  data: any
  handleItemLoad: (index: number) => void;
}

export const HomePage: React.FC<IProps> = ({
  blogs,
  isLoading,
  isItemLoading,
  data,
  handleItemLoad, 
}) => {
  return (
    <MainLayout data={data}>
      <DetailPage
        blogs={blogs}
        isLoading={isLoading}
        isItemLoading={isItemLoading}
        handleItemLoad={handleItemLoad}
      />
    </MainLayout>
  );
};
