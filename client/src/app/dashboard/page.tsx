"use client";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "@pangeacyber/react-auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "../axios";
import CounterBlock from "./CounterBlock";
import OnBoarding from "./OnBoarding";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const router = useRouter();
  const { authenticated, login, user, client } = useAuth();
  const [isNewUser, setisNewUser] = useState(false);
  const [Records, setRecords] = useState([]);

  useEffect(() => {
    if (!authenticated) {
      router.push("/");
    }
    console.log(user);
    axios
      .get("/users/getuserdetails/" + user?.refresh_token.identity)
      .then((res) => {
        console.log(res);
        setisNewUser(false);
        axios.get(`/file/document/user/${res.data.user.id}`).then((res) => {
          setRecords(res.data);
        });
      })
      .catch((err) => {
        setisNewUser(true);
      });
  }, [authenticated, user]);
  console.log(user);

  return (
    <div className="h-screen bg-accent flex">
      {isNewUser && <OnBoarding />}
      <Sidebar />
      <div className="py-10 w-full md:pl-[25%]">
        <div className="w-full mb-10 px-10 flex justify-between border-b-2 py-4 border-primary-2">
          <h2 className="text-2xl font-bold">
            Hi {user?.profile.first_name} {user?.profile.last_name},
            <br /> Welcome Back
          </h2>
          {user?.profile.image_url ? (
            <img
              className="h-16 w-16 rounded-full object-cover"
              src={user?.profile.image_url}
              alt=""
            />
          ) : (
            <FontAwesomeIcon
              color="#188DFF"
              className="h-16 w-16"
              icon={faUserCircle}
            />
          )}
        </div>
        <div className="py-10 px-20 w-full">
          <CounterBlock
            title="Documents"
            value={("0" + Records.length).slice(-2)}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
