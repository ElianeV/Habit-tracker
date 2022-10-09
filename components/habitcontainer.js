export default function Habitcontainer({ habits }) {
  console.log(habits);
  return (
    <>
      <div className="h-[calc(100%-3rem)] flex items-center">
        <div className="w-1/3 h-5/6 ml-10 rounded-lg shadow-lg">
          <div className="p-1 border-b flex justify-around">
            <div>My habits</div>
            <div>
              <p>{new Date().toLocaleString("default", { month: "long" })}</p>
              <p>{new Date().getFullYear()}</p>
            </div>
          </div>
          {habits.map((habit) => (
            <div key={habit.id} className="p-3 flex justify-between border-b">
              <div className="w-4">Icon</div>
              <div className="w-18">{habit.name}</div>
              <div>5/7 days</div>
              <div>Goal in 4</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
