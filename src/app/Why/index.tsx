import React from "react";
import "./styles.css";
const Why = () => {
  return (
    <div className="grid md:grid-cols-[40%_60%] py-12 md:py-20">
      <div className="">
        <div className="p-5 md:p-10 bg-accent w-72 mx-auto rounded-lg shadow-lg">
          <img
            src="https://www.techopedia.com/wp-content/uploads/2023/03/aee977ce-f946-4451-8b9e-bba278ba5f13.png"
            alt=""
            className="rounded-lg"
          />
        </div>
      </div>
      <div>
        <h2 className="text-center mt-10 md:text-left text-3xl text-primary font-bold">Why MRA?</h2>
        <ul className="my-4 text-lg md:text-2xl px-6 md:pr-20">
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
