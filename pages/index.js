import { Inter } from "@next/font/google";
import HomePage from "../src/components/Home/HomePage";
import EventsCategory from './models/EventsCategory'

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <>
      <HomePage data={data} />
    </>
  );
}

export const getServerSideProps = async () => {
  const eventsCategories = await EventsCategory.find();
  return {
    props: {
      data: JSON.parse(JSON.stringify(eventsCategories)), // SHEEAT
    },
  };
};
