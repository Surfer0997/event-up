import Image from "next/image";
import Link from "next/link";

const EventsMain = ({ data }) => {
  return (
    <div className="events_page">
 
        {data.map((event) => (
          <Link className="card" key={event.id} href={`/events/${event.id}`}>
            <Image
            fill
              src={event.image}
              alt={event.title}
              style={{objectFit:"cover"}}
            />
            <h2>{event.title}</h2>
          </Link>
        ))}
    </div>
  );
};

export default EventsMain;
