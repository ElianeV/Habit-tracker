import { useEffect, useState } from "react";

export default function CalendarRow({ habit, dates }) {
  const [completedDays, setCompletedDays] = useState([]);
  const completedDaysStrings = completedDays.map((day) =>
    new Date(day.date).toDateString()
  );

  useEffect(() => {
    fetchData();
  }, [completedDays]);

  async function fetchData() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/habit/${habit.id}`
    );
    const data = await res.json();
    setCompletedDays(data);
  }

  // console.log({ dates, completedDays });

  const toggleDay = async (date) => {
    const day = {
      // Date was stored in db by one day off, needed to offset timezone (Prisma's fault!!!)
      date: new Date(
        Date.parse(date.toUTCString()) - date.getTimezoneOffset() * 60000
      ),
      habitId: habit.id,
    };
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/days`, {
      method: "POST",
      body: JSON.stringify(day),
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
    });
  };

  const deleteCompletedDay = (completedDay) => {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/days/${day.id}`, {
    //   method: "DELETE",
    // })
    // const data = await res.json()
    // console.log(data)
    // fetchData()
    console.log(completedDay);
  };

  return (
    <div className="w-800 flex justify-around text-center items-center grow border-t">
      {dates.map((date) => (
        <>
          {completedDaysStrings.includes(date.toDateString()) ? (
            <div
              className="w-16 h-12 m-auto rounded-xl cursor-pointer bg-neutral-800"
              onClick={() => deleteCompletedDay(completedDay)}
            ></div>
          ) : (
            <div
              className="w-16 h-12 m-auto border-neutral-200 border-solid border rounded-xl cursor-pointer"
              onClick={() => toggleDay(date)}
            ></div>
          )}
        </>
      ))}
    </div>
  );
}
