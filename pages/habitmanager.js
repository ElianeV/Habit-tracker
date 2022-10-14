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
      <Navbar></Navbar>
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
          <Image src={bghabits}></Image>
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
                className="w-full block rounded-3xl bg-neutral-50 border-neutral-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                value={newHabitName}
                onChange={(event) => setNewHabitName(event.target.value)}
              />
              <h6 className="font-bold mt-2 pl-4">Category</h6>
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
          </div>
        </>
      ) : null}
    </>
  );
}
