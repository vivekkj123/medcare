"use client";
import React, { Key, useEffect, useState } from "react";
import Sidebar from "../dashboard/Sidebar";
import axios from "../axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@pangeacyber/react-auth";
import { getCookie, getCookies } from "cookies-next";
interface IRecord {
  action: String;
  actor: String;
  id: Key;
  message: String;
  status: String;
  timestamp: string;
}
const MyDocs = () => {
  const { user } = useAuth();
  const [Records, setRecords] = useState<IRecord[]>([]);
  useEffect(() => {
    if (user != undefined) {
      axios
        .post("/auditlog/", {
          jwtToken: getCookie("jwtToken"),
        })
        .then((res) => {
          console.log(res.data);
          setRecords(res.data.auditLogs);
        });
    }
  }, [user]);
  return (
    <div className="h-screen md:h-screen bg-accent flex ">
      <Sidebar />
      <div className="py-10 w-full md:pl-[25%] ">
        <div className="md:pl-20 pl-6 bg-white md:px-10 py-10 rounded-2xl mx-6 md:mx-20">
          <h2 className="text-3xl font-bold text-primary">Audit Log</h2>
        </div>
        <div className="px-8 md:px-16 py-10 bg-white mx-5 md:mx-20 my-10 rounded-2xl h-[75%] overflow-y-scroll scrollbar-hide">
          {Records.length === 0 && (
            <h2 className="text-center font-bold">No Records Found</h2>
          )}
          {Records.map((rec) => (
            <div className="py-4 shadow-md px-10 my-10 rounded-lg" key={rec.id}>
              <h1 className="text-xl font-semibold">{rec.action}</h1>

              <p>{rec.message}</p>
              <div className="flex justify-between items-center">
                <p className="text-right font-bold">{rec.status}</p>
              </div>
              <p className="text-right text-sm">
                {new Date(rec.timestamp).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyDocs;
