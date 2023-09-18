"use client";
import React, { Key, useEffect, useState } from "react";
import Sidebar from "../dashboard/Sidebar";
import axios from "../axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@pangeacyber/react-auth";
interface IRecord {
  _id: Key;
  title: String;
  description: String;
  pdfFiles: [string];
  hospitalName: String;
  doctorName: String;
  doctorLicense: String;
  hospitalLicense: String;
  consultationDate: Date;
  patientId: String;
  uploadedBy: String;
}
const MyDocs = () => {
  const { user, authenticated } = useAuth();
  const [Records, setRecords] = useState<IRecord[]>([]);
  const router = useRouter()
  useEffect(() => {
    if (!authenticated) {
      router.push("/");
    }
    if (user != undefined) {
      axios
        .get("/users/getuserdetails/" + user?.refresh_token.identity)
        .then((res) => {
          axios.get(`/file/document/user/${res.data.user.id}`).then((res) => {
            setRecords(res.data);
          });
        });
    }
  }, [user]);
  return (
    <div className="h-screen md:h-screen bg-accent flex ">
      <Sidebar />
      <div className="py-10 w-full md:pl-[25%] ">
        <div className="md:pl-20 pl-6 bg-white md:px-10 py-10 rounded-2xl mx-6 md:mx-20">
          <h2 className="text-3xl font-bold text-primary">My Documents</h2>
        </div>
        <div className="px-8 md:px-16 py-10 bg-white mx-5 md:mx-20 my-10 rounded-2xl h-[75%] overflow-y-scroll scrollbar-hide">
          {Records.length === 0 && <h2 className="text-center font-bold">No Records Found</h2>}
          {Records.map((rec) => (
            <div
              className="py-4 shadow-md px-10 my-10 rounded-lg"
              key={rec._id}
            >
              <h1 className="text-xl font-semibold">{rec.title}</h1>

              <p>{rec.description}</p>
              <div className="flex justify-between items-center">
                <Link
                  className="bg-primary text-white px-4 py-2 rounded-full"
                  href={
                    rec.pdfFiles
                      ? `${process?.env?.NEXT_PUBLIC_BACKEND_URL}/file/document/${rec?.pdfFiles[0]}`
                      : "/"
                  }
                  target="_blank"
                >
                  View
                </Link>
                <p className="text-right text-sm">
                  Uploaded by {rec.doctorName}, {rec.hospitalName}
                </p>
              </div>
              <p className="text-right text-sm">
                on {new Date(rec.consultationDate).toDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyDocs;
