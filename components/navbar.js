import React, { Component } from "react";

class Topbar extends React.Component {
  render() {
    return (
      <>
        <div className="bg-slate-700 flex justify-between">
          <h1 className="text-white p-3">LOGO</h1>
          <h1 className="text-white p-3">LOGOUT</h1>
        </div>
      </>
    );
  }
}
export default Topbar;
