import Image from "next/image";
import Link from "next/link";

const HomePage = ({data}) => {
  return (
    <div className="home_body">
      {data.map((event) => (
        <Link className="card" key={event.id} href={`/events/${event.id}`} passHref>
      <div className="image">
            <Image fill alt={event.title} src={event.image} loading="lazy" style={{objectFit:"cover"}}/>
          </div>
          <div className="content">
          <h2>{event.title}</h2>
          <p style={{marginTop:'1.5rem'}}>{event.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;