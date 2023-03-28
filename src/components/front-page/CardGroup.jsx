import { useState } from "react";
import Card from "./Card";
const CardGroup = ({ busDetails, handleClick }) => {
  return (
    <div className="container">
      <div className="row row-cols-2 row-cols-md-4 g-3">
        {busDetails.map((bus) => (
          <Card key={bus.id} bus={bus} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default CardGroup;
