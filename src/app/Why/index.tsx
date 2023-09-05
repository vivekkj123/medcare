import React from "react";
import "./styles.css";
const Why = () => {
  return (
    <div className="grid grid-cols-[40%_60%] py-20">
      <div className="">
        <div className="p-10 bg-accent w-72 mx-auto rounded-lg shadow-lg">
          <img
            src="https://www.techopedia.com/wp-content/uploads/2023/03/aee977ce-f946-4451-8b9e-bba278ba5f13.png"
            alt=""
            className="rounded-lg"
          />
        </div>
      </div>
      <div>
        <h2 className="text-3xl text-primary font-bold">Why MRA?</h2>
        <ul className="my-4 text-2xl pr-20">
          <li>Access your health data everywhere, at your own convenience</li>
          <li>
            Restricted access to your health data. Not everyone can see
            everything
          </li>
          <li>
            Accessible to every hospitals and doctors, but in a secured way
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Why;
