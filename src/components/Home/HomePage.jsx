import Image from "next/image";
import Link from "next/link";

const HomePage = ({data}) => {
  console.log(data);
  return (
    <div className="home_body">
      {data.map((event) => (
        <Link className="card" key={event.id} href={`/events/${event.id}`} passHref>
      <div className="image">
            <Image width={600} height={400} alt={event.title} src={event.image} />
          </div>
          <div className="content">
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          </div>
        
        </Link>
      ))}
    </div>
  );
};

export default HomePage;