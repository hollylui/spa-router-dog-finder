import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ dogInfo }) => {
  return (
    <div className="dogs">
      {dogInfo.map((dog) => {
        return (
          <NavLink
            id={dog.name.toLowerCase()}
            to={dog.to}
            className="navBarLink"
            onClick={dog.handler}
          >
            <img className="dogImg" src={dog.img} alt={dog.name} />
            <span>{dog.name}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navbar;
