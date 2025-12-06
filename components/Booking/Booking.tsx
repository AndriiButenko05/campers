"use client";
import { useState } from "react";
import Calendar from "../Calendar/Calendar";
import toast, { Toaster } from "react-hot-toast";

export default function Booking() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const inputStyles =
    "w-[527px] h-[60px] rounded-xl p-[18px]  text-(--main) placeholder:text-(--text) bg-(--inputs) focus:outline-none focus:ring-2 focus:ring-(--button) transition-all ease-out";
  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Campervan booked!");
    event.currentTarget.reset();
    setStartDate(null);
  };
  return (
    <div className="p-6 border border-(--gray-light) rounded-[20px] w-[641px] h-[588px]">
      <Toaster position="top-right" reverseOrder={false} />
      <h2 className="font-semibold text-xl leading-6 mb-2">
        Book your campervan now
      </h2>
      <p className="mb-6 text-(--gray) text-[16px]">
        Stay connected! We are always ready to help you.
      </p>

      <form
        onSubmit={formSubmit}
        className="flex flex-col gap-3.5 items-center"
      >
        <input
          type="text"
          name="name"
          placeholder="Name*"
          className={inputStyles}
          required={true}
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          className={inputStyles}
          required={true}
        />
        <Calendar
          className={inputStyles}
          selected={startDate}
          onChange={setStartDate}
        ></Calendar>
        <textarea
          name="comment"
          placeholder="Comment"
          className={`${inputStyles} h-[118px] resize-none`}
        ></textarea>{" "}
        <button
          type="submit"
          className="inline-block text-center bg-(--button) rounded-full py-4 px-10 w-40 h-14 font-medium text-base leading-6 tracking-tighter text-(--white) hover:bg-(--button-hover) transition-colors ease-out"
        >
          Send
        </button>
      </form>
    </div>
  );
}
