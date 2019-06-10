import React from "react";
import Auth from "../Auth/Auth";

const Header = () => {
  return (
    <div className="jumbotron text-center p-2 bg-info">
      <h1 className="text-white">Create Todo List</h1>
      <Auth />
    </div>
  );
};

export default Header;
