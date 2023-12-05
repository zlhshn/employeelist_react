import { useState } from "react";
import data from "../data";

const Employee = () => {
  const size = 5;
  const [currentPage, setCurrentpage] = useState(1);
  const startİndex = (currentPage - 1) * size;
  const endİndex = startİndex + size;
  const displayData = data.slice(startİndex, endİndex);

  const handlePrev = () => {
    setCurrentpage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    const totalPages = Math.ceil(data.length / size);
    setCurrentpage((prevPage) => (prevPage % totalPages) + 1);
  };

  return (
    <>
      <p className="size">
        ( Employees  {startİndex + 1} to {Math.min(endİndex, data.length)} )
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
