import { Inter } from "@next/font/google";
import HomePage from "../src/components/Home/HomePage";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <>
    <HomePage data={data}/>
    </>
  );
}

export const getServerSideProps = async () => {
  const { events_categories } = await import("../data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
};
