import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="  text-[8px] md:text-sm p-2 m-1 mt-2 ml-2 bg-gray-200 rounded-lg">
        {name}{" "}
      </button>
    </div>
  );
};

export default Button;
