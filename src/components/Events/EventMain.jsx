import Image from "next/image";
import Link from "next/link";

const EventsMain = ({ data }) => {
  return (
    <div className="events_page">
 
        {data.map((event) => (
          <Link className="card" key={event.id} href={`/events/${event.id}`}>
            <Image
              src={event.image}
              alt={event.title}
              width={300}
              height={300}
            />
            <h2>{event.title}</h2>
          </Link>
        ))}
    </div>
  );
};

export default EventsMain;
