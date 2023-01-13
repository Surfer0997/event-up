import Image from "next/image";
import Link from "next/link";
import EventsMain from "../../src/components/Events/EventMain";

const EventsPage = ({ data }) => {
  return (
    <EventsMain data={data}/>
  );
};

export default EventsPage;
export async function getServerSideProps() {
  const { events_categories } = await import("../../data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}
