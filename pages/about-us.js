const AboutUsPage = () => {
  return (
    <div className="about-us_page">
      <div>
      <p style={{ fontSize: "32px", textAlign:'center' }}>What we offer</p>
      <ul>
        <li>Full event production and design</li>
        <li>Vendor contract negotiation</li>
        <li>Staffing</li>
        <li>Sponsor and media management</li>
        <li>Video production</li>
        <li style={{fontStyle:'italic'}}>and much more...</li>
      </ul>
      </div>
      <p style={{textIndent:"2.5rem"}}>
        If you’re planning high-profile private parties, charitable events, or
        an off-the-charts wedding, look no further than Event Up. The small
        team, led by Surfer, specializes in bringing an element of surprise to
        the most elegant of events.
      </p>
      <ul className="about_us_list">
        <li>
          <h3>Who we’ve worked for</h3>
          <p style={{textIndent:"2.5rem"}}>
            Oprah, Jennifer Aniston, Elton John, Kim Kardashian, American
            Express, Cosmopolitan Magazine, Hard Rock Hotels and more.
          </p>
        </li>
        <li>
          <h3>About the brand</h3>
          <p style={{textIndent:"2.5rem"}}>
            Events by Event Up have more upbeat, modern, and young vibe than
            some other tenured companies. Event Up is a “creative-led
            experiential” event company that’s worked with luxury, travel,
            retail, technology, and other brand verticals for over 2 years.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default AboutUsPage;
