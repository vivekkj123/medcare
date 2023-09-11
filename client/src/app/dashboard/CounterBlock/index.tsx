import { faFile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const CounterBlock = () => {
  return (
    <div className="bg-white w-64 rounded-2xl h-32 px-6 text-xl py-8 flex  gap-8">
      <FontAwesomeIcon size={'sm'} icon={faFile} />
      <div className="flex flex-col">
        <b>08</b> Documents
      </div>
    </div>
  );
};

export default CounterBlock;
