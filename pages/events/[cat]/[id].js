import SingleEvent from "../../../src/components/Events/SingleEvent";

const EventPage = ({ data: { title, image, description } }) => (
  <SingleEvent data={{ title, image, description }} />
);

export default EventPage;

export async function getStaticPaths() {
  const { allEvents } = await import("../../../data/data.json");
  const allPaths = allEvents.map((event) => {
    return {
      params: {
        cat: event.city.toString(),
        id: event.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { allEvents } = await import("../../../data/data.json");
  const eventId = context?.params.id;
  const data = allEvents.filter((event) => event.id === eventId)[0];
  return {
    props: {
      data,
    },
  };
}
