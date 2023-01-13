import EventsMain from "../../src/components/Events/EventMain";

const EventsPage = ({ data }) => {
  return (
    <EventsMain data={data}/>
  );
};

export default EventsPage;
export async function getServerSideProps() {
  const { events_categories } = await import("../../tmp/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}
