import React from "react";

const BasicInformation = ({ name, login, bio, location, email }) => {
  return (
    <div className="md:w-[30%] text-left mt-4 mr-10">
      <p className="text-brand-grey font-semibold text-lg mb-1">{name}</p>
      <p className="text-brand-grey text-sm mb-3">{login}</p>
      <p className="text-brand-grey text-xs	md:h-[50px] lg:h-[80px] text-ellipsis overflow-hidden ">
        {bio}
      </p>
      <div className="flex mt-8 mb-3">
        <img
          className="opacity-70 mr-3 "
          src="https://img.icons8.com/material-sharp/24/000000/place-marker.png"
          alt="Location"
        />
        <p className="text-brand-grey text-xs	flex items-center">{location}</p>
      </div>
      <div className="flex mb-2">
        <img
          className="opacity-70 mr-3 w-5"
          src="https://img.icons8.com/ios-glyphs/30/null/filled-message.png"
          alt="Email"
        />
        <p className="text-brand-grey text-xs	flex items-center">{email}</p>
      </div>
    </div>
  );
};

export default BasicInformation;
