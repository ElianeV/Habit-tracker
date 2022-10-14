import Navbar from "../components/navbar";
import React, { useState } from "react";
import Image from "next/image";
import art from "../public/art.png";
import book from "../public/book.png";
import brain from "../public/brain.png";
import dollar from "../public/dollar.png";
import fitness from "../public/fitness.png";
import love from "../public/love.png";
import productive from "../public/productive.png";
import social from "../public/social.png";
import bghabits from "../public/bghabits.png";

export default function Habitmanager({ data }) {
  const [showModal, setShowModal] = useState(false);
  const [newHabitName, setNewHabitName] = useState("");
  const [newHabitCategory, setNewHabitCategory] = useState("");

  const createHabit = async () => {
    const habit = {
      name: newHabitName,
      category: newHabitCategory,
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/habits`, {
      method: "POST",
      body: JSON.stringify(habit),
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
    });
  };
  return (
    <>
      <Navbar />
      <div className="w-11/12 md:w-8/12 h-96 mt-12 relative m-auto">
        <p className="text-center text-2xl py-5">
          You are not tracking any habits
        </p>
        <button
          className="block m-auto text-white bg-zinc-500 hover:bg-zinc-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Add new habit
        </button>
        <div className="absolute bottom-0">
          <Image src={bghabits} />
        </div>
      </div>
      {showModal ? (
        <>
          <div className="w-full h-full absolute top-0 flex justify-center items-center bg-neutral-900 bg-opacity-50">
            <div className="w-112 h-112 p-8 bg-white rounded-2xl">
              <h4 className="text-center text-2xl font-bold">New habit</h4>
              <h6 className="font-bold mt-2 pl-4">Name</h6>
              <input
                type="text"
                name="name"
                className="w-full block rounded-3xl bg-neutral-50 border-neutral-200 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                value={newHabitName}
                onChange={(event) => setNewHabitName(event.target.value)}
              />
              <h6 className="font-bold mt-2 pl-4">Category</h6>
              <div
                className="w-full h-40 flex flex-column flex-wrap justify-between"
                onChange={(event) => setNewHabitCategory(event.target.value)}
              >
                <input
                  className="opacity-0 absolute"
                  id="Physical health"
                  type="radio"
                  value="Pysical health"
                  name="category"
                />
                <label
                  for="Physical health"
                  className="w-44 block flex p-1 mb-1 bg-neutral-50 border-neutral-100 rounded-3xl hover:bg-indigo-50 cursor-pointer"
                >
                  <div className="w-7 h-7 ml-2">
                    <Image src={fitness} alt="Fitness icon" />
                  </div>
                  <span className="ml-2">Physical health</span>
                </label>

                <input
                  className="opacity-0 absolute"
                  id="Learning"
                  type="radio"
                  value="Learning"
                  name="category"
                />
                <label
                  for="Learning"
                  className="w-44 block flex p-1 mb-1 bg-neutral-50 border-neutral-100 rounded-3xl hover:bg-indigo-50 cursor-pointer"
                >
                  <div className="w-7 h-7 ml-2">
                    <Image src={book} alt="Book icon" />
                  </div>
                  <span className="ml-2">Learning</span>
                </label>

                <input
                  className="opacity-0 absolute"
                  id="Productivity"
                  type="radio"
                  value="Productivity"
                  name="category"
                />
                <label
                  for="Productivity"
                  className="w-44 block flex p-1 mb-1 bg-neutral-50 border-neutral-100 rounded-3xl hover:bg-indigo-50 cursor-pointer"
                >
                  <div className="w-7 h-7 ml-2">
                    <Image src={productive} alt="Productive icon" />
                  </div>
                  <span className="ml-2">Productivity</span>
                </label>

                <input
                  className="opacity-0 absolute"
                  id="Self-care"
                  type="radio"
                  value="Self-care"
                  name="category"
                />
                <label
                  for="Self-care"
                  className="w-44 block flex p-1 mb-1 bg-neutral-50 border-neutral-100 rounded-3xl hover:bg-indigo-50 cursor-pointer"
                >
                  <div className="w-7 h-7 ml-2">
                    <Image src={love} alt="Love icon" />
                  </div>
                  <span className="ml-2">Self-care</span>
                </label>

                <input
                  className="opacity-0 absolute"
                  id="Mental health"
                  type="radio"
                  value="Mental health"
                  name="category"
                />
                <label
                  for="Mental health"
                  className="w-44 block flex p-1 mb-1 bg-neutral-50 border-neutral-100 rounded-3xl hover:bg-indigo-50 cursor-pointer"
                >
                  <div className="w-7 h-7 ml-2">
                    <Image src={brain} alt="Brain icon" />
                  </div>
                  <span className="ml-2">Mental health</span>
                </label>

                <input
                  className="opacity-0 absolute"
                  id="Finances"
                  type="radio"
                  value="Finances"
                  name="category"
                />
                <label
                  for="Finances"
                  className="w-44 block flex p-1 mb-1 bg-neutral-50 border-neutral-100 rounded-3xl hover:bg-indigo-50 cursor-pointer"
                >
                  <div className="w-7 h-7 ml-2">
                    <Image src={dollar} alt="Dollar icon" />
                  </div>
                  <span className="ml-2">Finances</span>
                </label>

                <input
                  className="opacity-0 absolute"
                  id="Creativity"
                  type="radio"
                  value="Creativity"
                  name="category"
                />
                <label
                  for="Creativity"
                  className="w-44 block flex p-1 mb-1 bg-neutral-50 border-neutral-100 rounded-3xl hover:bg-indigo-50 cursor-pointer"
                >
                  <div className="w-7 h-7 ml-2">
                    <Image src={art} alt="Art icon" />
                  </div>
                  <span className="ml-2">Creativity</span>
                </label>

                <input
                  className="opacity-0 absolute"
                  id="Social"
                  type="radio"
                  value="Social"
                  name="category"
                />
                <label
                  for="Social"
                  className="w-44 block flex p-1 mb-1 bg-neutral-50 border-neutral-100 rounded-3xl hover:bg-indigo-50 cursor-pointer"
                >
                  <div className="w-7 h-7 ml-2">
                    <Image src={social} alt="Social icon" />
                  </div>
                  <span className="ml-2">Social</span>
                </label>
              </div>

              <h6 className="font-bold mt-2 pl-4">Category</h6>
              <button onClick={createHabit}>submit</button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
