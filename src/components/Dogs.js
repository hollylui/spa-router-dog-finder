import React from "react";
import { useParams } from "react-router-dom";

const Dogs = ({ dogInfo }) => {
  const param = useParams().dogName;

  return (
    <div className="dogInfo">
      {param && <h3>Name: {param[0].toUpperCase() + param.slice(1)}</h3>}
      {param &&
        dogInfo
          .filter((dog) => dog.name.toLowerCase() === param)
          .map((item) => {
            return (
              <div key={item}>
                <p>Age: {item.age}</p>
                {item.facts.map((fact, index) => (
                  <p key={index}>{fact}</p>
                ))}
              </div>
            );
          })}
    </div>
  );
};

export default Dogs;
