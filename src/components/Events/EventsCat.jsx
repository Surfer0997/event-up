// cat is for category
import Image from "next/image";
import Link from "next/link";

const EventsCat = ({ data, pageName }) => {
  return (
    <div className="cat_events">
      <h1>Events in {pageName}</h1>

      <div className="content">
        {data.map((event) => (
          <Link
            className="card"    
            href={`/events/${event.city}/${event.id}`}
            key={event.id}
            passHref
          >
            <Image
              src={event.image}
              alt={event.title}
              width={300}
              height={300}
            />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsCat;
