import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { showToast } from "../../lib/showToast";

const SingleEvent = ({ data: { title, image, description } }) => {
  const inputEmail = useRef();
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query?.id;

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      showToast('ERROR', "Please introduce a correct email address")
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
        response.json().then((resData) => {
          showToast('ERROR', resData.message)
        });
        throw new Error(`Error while registering an email. ${response.status}`);
      }
      const data = await response.json();
      showToast('SUCCESS', data?.message)
      inputEmail.current.value = "";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="event_single_page">
      <h1>{title}</h1>
      <div className="image-container">
        <div><Image src={image} fill alt={title} style={{ objectFit: "contain" }} /></div>
      </div>
      <p className="description">{description}</p>
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
    </div>
  );
};

export default SingleEvent;
