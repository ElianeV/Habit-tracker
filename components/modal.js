import { useState } from "react";
import Image from "next/image";
// import art from "../public/Creativity.png";
// import book from "../public/Learning.png";
// import brain from "../public/Mental health.png";
// import dollar from "../public/Finances.png";
// import fitness from "../public/Physical health.png";
// import love from "../public/Self-care.png";
// import productive from "../public/Productivity.png";
// import social from "../public/Social.png";

export default function Modal({ toggleModal, refreshData }) {
  const [newHabitName, setNewHabitName] = useState("");
  const [newHabitCategory, setNewHabitCategory] = useState("Physical health");
  const [newHabitGoal, setNewHabitGoal] = useState(7);
  const [requiredError, setRequiredError] = useState(false);

  const createHabit = async () => {
    if (newHabitName !== "") {
      const habit = {
        name: newHabitName,
        category: newHabitCategory,
        goal: newHabitGoal,
      };
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/habits`, {
        method: "POST",
        body: JSON.stringify(habit),
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
      }).then(() => {
        toggleModal();
        refreshData();
      });
    } else {
      setRequiredError(true);
    }
  };
  return (
    <>
      <div className="w-112 z-40 fixed top-1/2 left-1/2 -ml-56 -mt-60 p-7 bg-white rounded-2xl">
        <button
          type="button"
          onClick={toggleModal}
          class="relative left-[360px] bg-white rounded-md p-1 inline-flex items-center justify-center text-neutral-400 hover:text-neutral-500 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h4 className="text-center text-xl leading-3 font-bold text-neutral-800">
          New habit
        </h4>
        <h6 className="font-bold mt-2 pl-4 text-neutral-700">Name</h6>
        <input
          type="text"
          name="name"
          className={
            requiredError
              ? "w-full block rounded-3xl bg-neutral-50 border-rose-400 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400"
              : "w-full block rounded-3xl bg-neutral-50 border-neutral-200 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
          }
          value={newHabitName}
          onChange={(event) => setNewHabitName(event.target.value)}
        />
        {requiredError ? (
          <span className="ml-4 text-rose-700 text-xs leading-3">
            Please fill out a habit name
          </span>
        ) : (
          ""
        )}
        <h6 className="font-bold mt-2 pl-4 text-neutral-700">Category</h6>
        <div
          className="w-full h-40 flex flex-column flex-wrap justify-between"
          onChange={(event) => setNewHabitCategory(event.target.value)}
        >
          <input
            className="opacity-0 absolute"
            id="Physical health"
            type="radio"
            value="Physical health"
            name="category"
            defaultChecked
          />
          <label
            htmlFor="Physical health"
            className="w-44 block flex p-1 mb-1 bg-neutral-50 border-neutral-100 rounded-3xl hover:bg-indigo-50 cursor-pointer text-neutral-700"
          >
            <div className="w-7 h-7 ml-2">
              <Image
                src={`/Social.png`}
                width="40px"
                height="40px"
                alt="Fitness icon"
              />
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
            htmlFor="Learning"
            className="w-44 block flex p-1 mb-1 bg-neutral-50 border-neutral-100 rounded-3xl hover:bg-indigo-50 cursor-pointer text-neutral-700"
          >
            {/* <div className="w-7 h-7 ml-2">
              <Image src={book} alt="Book icon" />
            </div> */}
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
            htmlFor="Productivity"
            className="w-44 block flex p-1 mb-1 bg-neutral-50 border-neutral-100 rounded-3xl hover:bg-indigo-50 cursor-pointer text-neutral-700"
          >
            {/* <div className="w-7 h-7 ml-2">
              <Image src={productive} alt="Productive icon" />
            </div> */}
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
            htmlFor="Self-care"
            className="w-44 block flex p-1 mb-1 bg-neutral-50 border-neutral-100 rounded-3xl hover:bg-indigo-50 cursor-pointer text-neutral-700"
          >
            {/* <div className="w-7 h-7 ml-2">
              <Image src={love} alt="Love icon" />
            </div> */}
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
            htmlFor="Mental health"
            className="w-44 block flex p-1 mb-1 bg-neutral-50 border-neutral-100 rounded-3xl hover:bg-indigo-50 cursor-pointer text-neutral-700"
          >
            {/* <div className="w-7 h-7 ml-2">
              <Image src={brain} alt="Brain icon" />
            </div> */}
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
            htmlFor="Finances"
            className="w-44 block flex p-1 mb-1 bg-neutral-50 border-neutral-100 rounded-3xl hover:bg-indigo-50 cursor-pointer text-neutral-700"
          >
            {/* <div className="w-7 h-7 ml-2">
              <Image src={dollar} alt="Dollar icon" />
            </div> */}
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
            htmlFor="Creativity"
            className="w-44 block flex p-1 mb-1 bg-neutral-50 border-neutral-100 rounded-3xl hover:bg-indigo-50 cursor-pointer text-neutral-700"
          >
            {/* <div className="w-7 h-7 ml-2">
              <Image src={art} alt="Art icon" />
            </div> */}
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
            htmlFor="Social"
            className="w-44 block flex p-1 mb-1 bg-neutral-50 border-neutral-100 rounded-3xl hover:bg-indigo-50 cursor-pointer text-neutral-700"
          >
            {/* <div className="w-7 h-7 ml-2">
              <Image src={social} alt="Social icon" />
            </div> */}
            <span className="ml-2">Social</span>
          </label>
        </div>

        <h6 className="font-bold mt-2 pl-4 text-neutral-700">Goal</h6>
        <span className="ml-4 text-neutral-700">Complete</span>
        <input
          className="w-15 mx-1 bg-neutral-50 border-neutral-200 border-solid border-1   rounded-3xl text-neutral-700 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
          type="number"
          name="goal"
          min="1"
          max="100"
          value={newHabitGoal}
          onChange={(event) => setNewHabitGoal(event.target.value)}
        ></input>
        <span className="text-neutral-700">days and reward yourself!</span>
        <button
          onClick={createHabit}
          className="block float-right text-white bg-neutral-500 hover:bg-neutral-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          type="button"
        >
          Add
        </button>
      </div>
    </>
  );
}
