import EventsCat from "../../../src/components/Events/EventsCat";
import Event from "../../models/Event";
import EventsCategory from "../../models/EventsCategory";

const EventsCatPage = ({ data, pageName }) => (
  <EventsCat data={data} pageName={pageName} />
);

export default EventsCatPage;

export async function getStaticPaths() {
  const eventsCategories = await EventsCategory.find();
  const allPaths = eventsCategories.map((event) => {
    return {
      params: {
        cat: event.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  const allEvents = JSON.parse(JSON.stringify(await Event.find()));

  const city = context?.params.cat;
  const dataForThisPage = allEvents.filter((event) => event.city === city);

  const pageName = city.includes("-")
    ? city
        .split("-")
        .map((cityPart) => cityPart[0].toUpperCase() + cityPart.slice(1))
        .join("-")
    : city.includes(" ")
    ? city
        .split(" ")
        .map((cityPart) => cityPart[0].toUpperCase() + cityPart.slice(1))
        .join(" ")
    : city[0].toUpperCase() + city.slice(1);

  return {
    props: {
      data: dataForThisPage,
      pageName,
    },
  };
};
