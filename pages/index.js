import { Inter } from "@next/font/google";
import HomePage from "../src/components/Home/HomePage";
import dbConnect from "../src/lib/dbConnect";
import EventsCategory from "../src/models/EventsCategory";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <>
      <HomePage data={data} />
    </>
  );
}

export const getServerSideProps = async () => {
  await dbConnect();
  const eventsCategories = await EventsCategory.find();

  return {
    props: {
      data: JSON.parse(JSON.stringify(eventsCategories)), // SHEEAT
    },
  };
};
