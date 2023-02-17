import EventsMain from "../../src/components/Events/EventMain";
import dbConnect from "../lib/dbConnect";
import EventsCategory from '../models/EventsCategory';

const EventsPage = ({ data }) => {
  return (
    <EventsMain data={data}/>
  );
};

export default EventsPage;
export const getServerSideProps = async () => {
  await dbConnect();
  const eventsCategories = await EventsCategory.find();
  return {
    props: {
      data: JSON.parse(JSON.stringify(eventsCategories)), // SHEEAT
    },
  };
};
