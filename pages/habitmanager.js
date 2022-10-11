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
      <Navbar></Navbar>
      <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add new habit
      </button>
      {showModal ? (
        <>
          <div className="w-96 h-96 bg-slate-50 rounded-lg">
            <h1>Add a new habit</h1>
            <h2>Name</h2>
            <input
              type="text"
              name="name"
              className="w-full block"
              value={newHabitName}
              onChange={(event) => setNewHabitName(event.target.value)}
            />
            <p>Category</p>
            <div className="flex">
              <div className="w-7 h-7">
                <Image src={art} alt="Art icon"></Image>
              </div>
              <p>Creativity</p>
            </div>
            <div className="flex">
              <div className="w-7 h-7">
                <Image src={book} alt="Book icon"></Image>
              </div>
              <p>Learning</p>
            </div>
            <div className="flex">
              <div className="w-7 h-7">
                <Image src={brain} alt="Brain icon"></Image>
              </div>
              <p>Mental health</p>
            </div>
            <div className="flex">
              <div className="w-7 h-7">
                <Image src={dollar} alt="Dollar icon"></Image>
              </div>
              <p>Finances</p>
            </div>
            <div className="flex">
              <div className="w-7 h-7">
                <Image src={fitness} alt="Fitness icon"></Image>
              </div>
              <p>Physical health</p>
            </div>
            <div className="flex">
              <div className="w-7 h-7">
                <Image src={love} alt="Love icon"></Image>
              </div>
              <p>Self-care</p>
            </div>
            <div className="flex">
              <div className="w-7 h-7">
                <Image src={productive} alt="Productive icon"></Image>
              </div>
              <p>Productivity</p>
            </div>
            <div className="flex">
              <div className="w-7 h-7">
                <Image src={social} alt="Social icon"></Image>
              </div>
              <p>Social</p>
            </div>
            <input
              type="text"
              name="category"
              className="w-full block"
              value={newHabitCategory}
              onChange={(event) => setNewHabitCategory(event.target.value)}
            />
            <p>Goal</p>
            <button onClick={createHabit}>submit</button>
          </div>
        </>
      ) : null}
    </>
  );
}
