import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="h-12 flex justify-between border-b bg-transparent">
        <h1 className="p-3">LOGO</h1>
        <div className="flex flex-end">
          <Link href="/">
            <a className="p-3">Calendar</a>
          </Link>
          <Link href="/habitmanager">
            <a className="p-3">Manage habits</a>
          </Link>
          <h1 className="p-3">Logout</h1>
        </div>
      </div>
    </>
  );
}
