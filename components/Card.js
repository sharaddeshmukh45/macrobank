import React from "react";

function Card({ children, bgColor = "white" }) {
  return (
    <div className={`bg-${bgColor} mt-6 flex  items-center rounded-xl`}>
      {children}
    </div>
  );
}

export default Card;
