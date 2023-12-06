import { useState } from "react";
import data from "../data";

const Employee = () => {
  const [index,setIndex] = useState(0);
  const displayData = data.slice(index,index+5);

  const handlePrev = () => {
    setIndex((index - 5 + data.length) % data.length);
  };

  const handleNext = () => {
   setIndex((index+5) % data.length);
  };

  return (
    <>
      <p className="size">
        ( Employees  {index+1} to {index+5} )
      </p>
      <div className="person-container">
        {displayData.map(({ id, name, age, image, email }) => (
          <div className="person" key={id}>
            <img src={image} alt={name} />
            <div className="info">
              <h3>{name}</h3>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          </div>
        ))}
        <div className="btns">
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </>
  );
};

export default Employee;
