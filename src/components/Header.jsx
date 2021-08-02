import React from "react";

export const Header = ({ name }) => {
  return (
    <div className="p-2 center text-center">
      <div className="font-bold text-3xl pt-3 text-gray-700 text-center">
        {name}
      </div>
    </div>
  );
};
