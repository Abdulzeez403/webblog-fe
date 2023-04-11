import ApButton from "@/components/button";
import { ApHTMLContent } from "@/components/input/TextEditor";
import AppConfirm from "@/components/modal/comfirm";
import axios from "axios";
import { toast } from "react-toastify";
import { MyData } from "../../post/modal";

interface IProps {
  data: MyData;
  onOpen: () => void;
}

export const PostList: React.FC<IProps> = ({ data, onOpen }) => {
  const deleteBlog = () => {
    try {
      axios.delete(`http://localhost:5000/api/blog/${data?._id}`).then(() => {
        toast.success("Deleted Successfully");
      });
    } catch (error) {
      toast.error("Deleted Failed!");
    }
  };

  return (
    <tr className="border-b">
      {/* <td className="whitespace-nowrap px-6 py-4 font-medium">1</td> */}
      <td className="whitespace-nowrap px-6 py-4">{data?.title}</td>
      <td className="whitespace-nowrap px-6 py-4">
        <ApHTMLContent content={`<div>${data?.body?.slice(0, 30)}</div>`} />
      </td>
      <td className="whitespace-nowrap px-6 py-4">{data?._id}</td>

      <td className="whitespace-nowrap px-6 py-4 gap-4 flex">
        <ApButton
          className="py-1 px-3 bg-blue-300 rounded-md text-white"
          title="update"
          onClick={onOpen}
        />
        <AppConfirm onConfirm={deleteBlog}>
          <ApButton
            className="py-1 px-4 bg-red-500 rounded-md text-white"
            title="Delete"
            // onClick={deleteBlog}
          />
        </AppConfirm>
      </td>
    </tr>
  );
};
