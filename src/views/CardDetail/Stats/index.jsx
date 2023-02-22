import React from "react";

const Stast = ({ title, number }) => {
  return (
    <div className="flex items-center flex-col">
      <p className="text-brand-grey text-xs">{title}</p>
      <p className="text-brand-dark-grey font-semibold text-lg mb-1">
        {number}
      </p>
    </div>
  );
};

export default Stast;
