import { faFile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
interface ICounterBlock {
  title: string;
  value: string;
}
const CounterBlock = ({ title, value }: ICounterBlock) => {
  return (
    <div className="bg-white w-64 rounded-2xl h-32 px-6 text-xl py-8 flex  gap-8">
      <FontAwesomeIcon className="h-4 md:h-10" icon={faFile} />
      <div className="flex flex-col">
        <b>{value}</b> {title}
      </div>
    </div>
  );
};

export default CounterBlock;
