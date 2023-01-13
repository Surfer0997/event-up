import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useRef } from "react";

const SingleEvent = ({ data: { title, image, description } }) => {
  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query?.id;

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage("Please introduce a correct email address");
      return;
    }

    if (emailValue.trim() === "") return;

    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });
      
      if (!response.ok) {
        response.json().then((resData)=>{
          setMessage(resData.message);
        })
        throw new Error(`Error while registering an email. ${response.status}`);
      }
      const data = await response.json();
      setMessage(data?.message);
      inputEmail.current.value = '';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="event_single_page">
      <h1>{title}</h1>
      <Image src={image} width={500} height={500} alt={title} />
      <p>{description}</p>
      <form onSubmit={submitHandler} className="email_registration">
        <label htmlFor="email">Get registered for this event!</label>
        <input
          type="email"
          id="email"
          placeholder="Please, insert your email"
          ref={inputEmail}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SingleEvent;
