import useFetch from "@/components/hooks/fetch";
import { DashboardNav } from "@/module/layout/dashboard";
import { useEffect, useState } from "react";
import { MyData } from "../post/modal";
import { UpdateDetail } from "./detail";

export const UpdateScreen = () => {
  const [user, setUser] = useState<any>({} as any)

  useEffect(() => {
    const currentUser  = JSON.parse(localStorage.getItem("currentUser") as any) ;
    setUser(currentUser)
  }, []);
console.log(user?.id)
  const { apiData } = useFetch({ url: "http://localhost:5000/api/blog/"+ user?.id });
  return (
    <DashboardNav>
      <table className="min-w-full text-left text-sm bg-skin-alt border">
        <thead className="border-b font-medium bg-slate-300">
          <tr>
            {/* <th scope="col" className="px-6 py-4">
              #
            </th> */}
            <th scope="col" className="px-6 py-4">
              Title
            </th>
            <th scope="col" className="px-6 py-4">
              Body
            </th>
            <th scope="col" className="px-6 py-4">
              Id
            </th>
            <th scope="col" className="px-6 py-4">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {apiData?.map((data: MyData, i: number) => (
            <UpdateDetail blog={data} key={i} />
          ))}
        </tbody>
      </table>
    </DashboardNav>
  );
};
