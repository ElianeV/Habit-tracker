export default function Navbar() {
  return (
    <>
      <div className="h-12 flex justify-between border-b bg-transparent">
        <h1 className="p-3">LOGO</h1>
        <div className="flex flex-end">
          <h1 className="p-3">Manage habits</h1>
          <h1 className="p-3">Statistics</h1>
          <h1 className="p-3">Logout</h1>
        </div>
      </div>
    </>
  );
}
