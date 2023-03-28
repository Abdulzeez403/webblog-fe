import useFetch from "@/components/hooks/fetch";
import { IBlog } from "../home/models";
import { MainLayout } from "../layout/page";
import { CommentForm } from "./component/comment";
import { CommentList } from "./component/commentList";
import { SingleBlog } from "./component/singleBlog";
import { MyData } from "./modal";
interface IProps {
  Blogdata: IBlog;
  commentData?: MyData;
}

export const BlogDetail: React.FC<IProps> = ({ Blogdata, }) => {
 

  const {apiData} = useFetch({url: `http://localhost:5000/api/comment/${Blogdata?._id}`})
  return (
    <MainLayout>
      <div className="w-[95%] mx-auto text-justify sm:w-[90%] sm:mx-auto sm:text-justify lg:w-[80%] lg:mx-auto lg:text-justify">
        <SingleBlog Blogdatas={Blogdata} />
        <CommentForm Blogdatas={Blogdata} />
        <CommentList BlogComments={apiData}/>
      </div>
    </MainLayout>
  );
};
