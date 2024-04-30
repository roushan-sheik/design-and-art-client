import { useLoaderData } from "react-router-dom";

const CategoryDetails = () => {
  const items = useLoaderData();
  console.log(items);
  return <div></div>;
};

export default CategoryDetails;
