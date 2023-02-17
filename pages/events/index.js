import EventsMain from "../../src/components/Events/EventMain";
import EventsCategory from '../models/EventsCategory';

const EventsPage = ({ data }) => {
  return (
    <EventsMain data={data}/>
  );
};

export default EventsPage;
export const getServerSideProps = async () => {
  const eventsCategories = await EventsCategory.find();
  return {
    props: {
      data: JSON.parse(JSON.stringify(eventsCategories)), // SHEEAT
    },
  };
};
