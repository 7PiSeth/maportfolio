import React from "react";
import { MdPermContactCalendar } from "react-icons/md"

const Contact = () => {
  return (
    <div
      name="contact"
      className="md:h-screen flex flex-col justify-center max-md:py-[70px] items-center"
    >
      <div className="flex flex-col items-start">
        <div data-aos="fade-up"
          className="bg-[#F4F6F8] dark:bg-[#161B22] p-4 rounded-t-2xl mb-2 w-full">
          <div className="flex items-center rounded-2xl py-3 bg-[#e9ecf3] dark:bg-[#1f252c] ">
            <MdPermContactCalendar size={30} className="mx-3" />
            <p className="text-xl font-extrabold">Contact</p>
          </div>
        </div>
        <form action="https://getform.io/f/d7c637a8-6b7a-4c65-8762-1d04d4bf56c6" method="POST"
          id="form"
          autocomplete="off"
          data-aos="zoom-in-up" data-aos-offset="100"
        >
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea name="message" placeholder="Message me"
            className="h-60 "
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
