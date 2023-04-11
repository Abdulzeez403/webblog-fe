import useFetch from "@/components/hooks/fetch";
import { HomePage } from "@/module/home/page";
import axios from "axios";

function Home({ data }: any) {
  const { apiData, isLoading, serveError, handleItemLoad, itemLoading } =
    useFetch({
      url: `http://localhost:5000/api/blog`
    });
  return (
    <div>
      <HomePage
        blogs={apiData}
        isLoading={isLoading}
        isItemLoading={itemLoading}
        handleItemLoad={handleItemLoad}
        data={data}
      />
    </div>
  );
}

export default Home;

// export const getServerSideProps = async ({
//   query,
//   req,
// }: {
//   query: any;
//   req: any;
// }) => {
//   const {category} = query;

//   const res = await axios.get(`http://localhost:5000/api/blog/${category}`);
//   const data = res.data.BlogId;

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// };
