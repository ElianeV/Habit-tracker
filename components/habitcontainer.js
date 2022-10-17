export default function Habitcontainer({ habits }) {
  return (
    <>
      <div className="w-1/3 h-5/6 ml-10 border-neutral-200 border-solid border-2 border-r-0 rounded-3xl rounded-r-none shadow-lg bg-slate-50 flex flex-col overflow-hidden">
        <div className="h-20 pl-10 pr-4 border-b flex justify-between items-center bg-gradient-to-r from-violet-500 to-violet-50">
          <div className="text-2xl">My habits</div>
          <div>
            <p className="text-right text-xl">
              {new Date().toLocaleString("default", { month: "long" })}
            </p>
            <p className="text-right font-bold">{new Date().getFullYear()}</p>
          </div>
        </div>
        {habits.map((habit) => (
          <div
            key={habit.id}
            className="w-full grow p-3 flex items-center justify-between border-b"
          >
            <div className="w-8">Icon</div>
            <div className="w-18 grow">{habit.name}</div>
            <div className="text-slate-300">Goal: 4 days</div>
          </div>
        ))}
      </div>
    </>
  );
}
