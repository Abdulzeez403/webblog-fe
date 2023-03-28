import React, { useEffect, useState } from "react";
import ShotImage from "../../../public/Images/shot.jpg";
import TechImage from "../../../public/Images/weather.jpg";
import TravelImage from "../../../public/Images/traveling.jpg";
import ads from "../../../public/Images/ads1.jpg";
import Image from "next/image";
import { BlogsTemplate } from "./components/blogs";
import { MainLayout } from "../layout/page";
import useFetch from "@/components/hooks/fetch";
import AppPagination from "@/components/pagenation/pagination";

export const DetailPage = () => {
  const { apiData, isLoading, serveError, handleItemLoad, itemLoading } =
    useFetch({
      url: "http://localhost:5000/api/blog/",
    });

  return (
    <MainLayout>
      <div>
        <div className="flex gap-2">
          <div className="w-[100%] sm:w-[80%] md:w-[90] lg:w-[70%] bg-red-300 relative ">
            <Image src={ShotImage} alt="ShotImage" width={1000} height={600} />

            <div className="absolute bottom-5 left-8">
              <h5 className="font-semibold text-red-400 text-sm">
                TECHNOLOGGY
              </h5>
              <h3 className="font-bold text-white text-[1.7rem]">
                The regime of modern technology begins
              </h3>

              <h4 className="font-bold text-[12px] text-white">
                ABDULAZEEZ SODIQ - <span>20, APRIL 2023</span>
              </h4>
            </div>
          </div>
          <div className="hidden sm:hidden md:hidden lg:grid lg:grid-flow-row lg:gap-y-1">
            <div className="relative">
              <Image
                src={TechImage}
                alt="RuningImage"
                width={440}
                height={300}
              />

              <div className="absolute bottom-5 left-8">
                <h5 className="font-semibold text-red-400 text-sm">WEATHER</h5>
                <h3 className="font-bold text-white text-[1.3rem]">
                  The Beauty of the Earth is multifaced!
                </h3>

                <h4 className="font-bold text-[12px] text-white">
                  ABDULAZEEZ SODIQ - <span>20, APRIL 2023</span>
                </h4>
              </div>
            </div>
            <div className="relative">
              <Image
                src={TravelImage}
                alt="SportImage"
                width={440}
                height={300}
              />
              <div className="absolute bottom-5 left-8">
                <h5 className="font-semibold text-red-400 text-sm">TRAVEL</h5>
                <h3 className="font-bold text-white text-[1.3rem]">
                  The World is beyound what we see...
                </h3>

                <h4 className="font-bold text-[12px] text-white">
                  ABDULAZEEZ SODIQ - <span>20, APRIL 2023</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-2 my-2">
          <div className="w-[80%]">
            <BlogsTemplate
              blogs={apiData}
              isLoading={isLoading}
              isItemLoading={itemLoading}
              handleItemLoad={handleItemLoad}
            />
          </div>
          <div className="hidden w-[40%]  mx-auto  h-[27rem] sm:hidden md:hidden lg:flex">
            <h4 className="text-[1rem] text-red-500 border-1 text-center">
              <div className="h-[20px]">
                <Image
                  src={ads}
                  alt="ads/image"
                  width={500}
                  height={500}
                  // sizes="100vw"
                  // object-fit="contain"
                />
              </div>
            </h4>
          </div>
        </div>
      {/* <AppPagination /> */}

      </div>
    </MainLayout>
  );
};
