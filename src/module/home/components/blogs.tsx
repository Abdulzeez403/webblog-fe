import Image from "next/image";
import BlogImage from "../../../../public/Images/shot.jpg";
import ProfileImage from "../../../../public/Images/avatar.png";
import { GiOpenBook } from "react-icons/gi";
import { IBlog } from "../models";
import BounceLoader from "react-spinners/BounceLoader";
import RiseLoader from "react-spinners/RiseLoader";
import Link from "next/link";

interface IProps {
  blogs: IBlog[];
  isLoading: boolean;
  isItemLoading: any;
  handleItemLoad: (index: any) => void;
}

export const BlogsTemplate: React.FC<IProps> = ({
  blogs,
  isLoading,
  isItemLoading,
  handleItemLoad,
}) => {
 
  return (
    <div>
      {isLoading ? (
        <div className="flex m-0 justify-center items-center h-96">
          <RiseLoader color="black" size={40} />
        </div>
      ) : (
        <div className="grid grid-flow-cols gap-3 lg:grid lg:grid-cols-2 ">
          {blogs?.map((data, i) => (
            <div key={i} className="border-2 px-3 shadow-lg w-96 lg:w-[100%]  ">
              {isItemLoading[i] ? (
                <div className="flex m-0 justify-center items-center h-96 bg-slate-500">
                  <BounceLoader color="white" size={180} speedMultiplier={2} />
                </div>
              ) : (
                <Link href={`blog/${data?._id}`}>
                  <div onClick={() => handleItemLoad(i)}>
                    <div className="w-[100%]">
                      <Image
                        src={BlogImage}
                        alt="BlogsImage"
                        // width={400}
                        // height={400}
                      />
                    </div>

                    <h4 className="font-bold text-[1.3rem]">{data?.title}</h4>
                    {/* <ApHTMLContent  content={data?.body.slice(0,150)} /> */}
                    <div className="flex justify-between items-center ">
                      <div className="flex items-center gap-x-3">
                        <div className="">
                          <Image
                            src={ProfileImage}
                            alt="BlogsImage"
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                        </div>
                        <div className="block">
                          <h4>
                            {data?.author || (
                              <h4 className="font-bold">Unknown Author</h4>
                            )}
                          </h4>
                          {/* <h4>{moment(data?.createdAt).format("LLL")}</h4> */}
                        </div>
                      </div>
                      <GiOpenBook color="black" size={40} />
                    </div>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
