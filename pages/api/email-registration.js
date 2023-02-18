import dbConnect from "../../src/lib/dbConnect";
import Event from "../../src/models/Event";

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;

  if (method === "POST") {
    const { email, eventId } = req.body;

    if (!email | !email.includes("@") | !email.includes(".")) {
      res.status(422).json({ message: "Invalid email address" });
      return false;
    }

    const eventToUpdate = await Event.findOne({ id: eventId });

    if (eventToUpdate.emails_registered.includes(email)) {
      res.status(403).json({ message: "This email is already registered." });
      return eventToUpdate;
    }

    const newRegiteredEmails = [...eventToUpdate.emails_registered, email];

    const updatedEvent = await Event.findOneAndUpdate(
      { id: eventId },
      { emails_registered: newRegiteredEmails }
    );

    res.status(200).json({
      message: `You have been registered successfully with email ${email}`,
    });
    return true;
  }
}
