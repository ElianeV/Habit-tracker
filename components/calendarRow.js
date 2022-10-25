import { useEffect, useState } from "react";

export default function CalendarRow({ habit, dates }) {
  const [completedDays, setCompletedDays] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/habit/${habit.id}`
      );
      const data = await res.json();
      setCompletedDays(data);
    }
    fetchData();
  }, [completedDays]);

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

  return (
    <div className="w-800 flex justify-around text-center items-center grow border-t">
      {dates.map((date) => (
        <div
          className="w-16 h-12 m-auto border-neutral-200 border-solid border rounded-xl cursor-pointer"
          key={date.getDate()}
          onClick={() => toggleDay(date)}
        >
          {completedDays.map((completedDay) =>
            new Date(completedDay.date).toDateString() ===
            date.toDateString() ? (
              <div
                key={completedDay.date}
                className="w-16 h-12 m-auto border-neutral-200 border-solid border rounded-xl cursor-pointer bg-neutral-800"
              ></div>
            ) : (
              ""
            )
          )}
        </div>
      ))}
    </div>
  );
}
