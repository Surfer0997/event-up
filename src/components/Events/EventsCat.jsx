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
            <div className="image">
            <Image
              src={event.image}
              alt={event.title}
              fill
              style={{objectFit:"cover"}}
            />
            </div>
            <h2>{event.title}</h2>
            <p className="description">{event.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsCat;
