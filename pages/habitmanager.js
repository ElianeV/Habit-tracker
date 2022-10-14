import Navbar from "../components/navbar";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import bghabits from "../public/bghabits.png";
import Modal from "../components/modal";

export default function Habitmanager({ data }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Navbar />
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
      {showModal ? (
        <>
          <div
            className="w-full h-full absolute top-0 flex justify-center items-center bg-neutral-900 bg-opacity-50"
            onClick={toggleModal}
          ></div>
          <Modal toggleModal={toggleModal} />
        </>
      ) : null}
    </>
  );
}
