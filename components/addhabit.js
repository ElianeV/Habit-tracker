import React, { useState } from "react";

export default function Addhabit() {
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

    console.log(res.json());
  };
  return (
    <>
      <div>
        <input
          type="text"
          name="name"
          value={newHabitName}
          onChange={(event) => setNewHabitName(event.target.value)}
        />
        <input
          type="text"
          name="category"
          value={newHabitCategory}
          onChange={(event) => setNewHabitCategory(event.target.value)}
        />
        <button onClick={createHabit}>submit</button>
      </div>
    </>
  );
}
