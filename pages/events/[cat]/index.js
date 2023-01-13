import EventsCat from "../../../src/components/Events/EventsCat";

const EventsCatPage = ({ data, pageName }) => (
  <EventsCat data={data} pageName={pageName} />
);

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("../../../data/data.json");
  const allPaths = events_categories.map((event) => {
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
  const { allEvents } = await import("../../../data/data.json");
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
