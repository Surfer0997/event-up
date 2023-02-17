import SingleEvent from "../../../src/components/Events/SingleEvent";
import dbConnect from "../../lib/dbConnect";
import Event from '../../models/Event'


const EventPage = ({ data: { title, image, description } }) => (
  <SingleEvent data={{ title, image, description }} />
);

export default EventPage;

export async function getStaticPaths() {
  await dbConnect();
  const allEvents = await Event.find();
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
  await dbConnect();
  const allEvents = await Event.find();
  const eventId = context?.params.id;
  const data = allEvents.filter((event) => event.id === eventId)[0];
  return {
    props: {
      data,
    },
  };
}
