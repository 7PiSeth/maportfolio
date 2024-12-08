import React from "react";

const Hamburger = (props) => {
  const genericHamburgerLine = `h-1 w-6 my-0.5 rounded-full ${props.bgColor} transition ease transform duration-300`;

  return (
    <button
      className="flex flex-col rounded justify-center items-center"

    >
      <div
        className={`${genericHamburgerLine} ${
          props.isOpen && "rotate-45 translate-y-2"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          props.isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          props.isOpen && "-rotate-45 -translate-y-2"
        }`}
      />
    </button>
  );
};

export default Hamburger;
