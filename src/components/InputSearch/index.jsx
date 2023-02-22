import React from "react";
import "./InputSearch.scss";

const InputSearch = ({ placeholder, onChange, className }) => {
  return (
    <div className={`${className} input--container`}>
      <img
        className="input--container-imgSearch"
        src="https://img.icons8.com/search"
        alt=""
      />
      <input
        className="input--container-inputSearch"
        type="text"
        placeholder={placeholder}
        name="gsearch"
        onChange={onChange}
      />
    </div>
  );
};
export default InputSearch;
