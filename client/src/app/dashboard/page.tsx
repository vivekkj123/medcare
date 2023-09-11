"use client";
import CounterBlock from "./CounterBlock";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="h-screen bg-accent flex">
      <Sidebar />
      <div className="py-10 w-full">
        <div className="w-full mb-10 px-10 flex justify-between border-b-2 py-4 border-primary-2">
          <h2 className="text-2xl font-bold">
            Hi John Doe, <br /> Welcome Back
          </h2>
          <img
            className="h-20 w-20 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            alt=""
          />
        </div>
        <div className="py-10 px-20 w-full">
          <CounterBlock />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
