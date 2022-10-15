import Navbar from "../components/navbar";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import bghabits from "../public/bghabits.png";
import Modal from "../components/modal";

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/habits`);
  const data = await res.json();

  return {
    props: { data },
  };
}

export default function Habitmanager({ data }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Navbar />
      {data.length > 0 ? (
        <>
          <div className="w-11/12 m-auto">
            <h1 className="mt-10 text-4xl font-bold text-neutral-800">
              Your habits
            </h1>
            <button
              className="float-right -mt-10 text-white bg-indigo-500 hover:bg-indigo-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              type="button"
              onClick={toggleModal}
            >
              Add new habit
            </button>
            <div className="w-full h-96 overflow-y-auto mt-8 flex flex-wrap">
              {data.map((habit) => (
                <div className="w-1/3">
                  <div className="w-14 h-14 z-20 p-2 relative top-7 left-64 bg-white border-neutral-200 border-solid border-2 rounded-xl shadow-xl">
                    <Image
                      src={`/${habit.category}.png`}
                      width="40px"
                      height="40px"
                      alt="Social icon"
                    />
                  </div>
                  <div className="relative w-72 h-56 p-4 pt-8 border-neutral-200 border-solid border-2 rounded-3xl">
                    <h2 className="text-3xl text-neutral-800 font-bold">
                      <span className="w-10 bg-gradient-to-r from-amber-100 to-amber-100 bg-no-repeat bg-[length:100%_70%] bg-[center_top_0.9rem]">
                        {habit.name}
                      </span>
                    </h2>
                    <h3 className="text-2xl text-neutral-600">
                      {habit.category}
                    </h3>
                    <h4 className="text-xl font-bold">
                      Goal: {habit.habitsCompleted}/{habit.goal} days
                    </h4>
                    <div className="absolute bottom-2 right-8 flex">
                      <p className="text-indigo-500 mr-2">Details</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-indigo-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-11/12 md:w-8/12 h-96 mt-12 relative m-auto">
            <p className="text-center text-2xl py-5">
              You are not tracking any habits
            </p>
            <button
              className="block m-auto text-white bg-neutral-500 hover:bg-neutral-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              type="button"
              onClick={toggleModal}
            >
              Add new habit
            </button>
            <div className="absolute bottom-0">
              <Image src={bghabits} />
            </div>
          </div>
        </>
      )}

      {showModal ? (
        <>
          <div
            className="w-full h-screen z-30 absolute top-0 flex justify-center items-center bg-neutral-900 bg-opacity-50"
            onClick={toggleModal}
          ></div>
          <Modal toggleModal={toggleModal} />
        </>
      ) : null}
    </>
  );
}
