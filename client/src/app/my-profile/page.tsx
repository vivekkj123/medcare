"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../dashboard/Sidebar";
import { useAuth } from "@pangeacyber/react-auth";
import axios from "../axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

interface IDisplayComponent {
  title: string;
  value: string;
}
const DisplayComponent = ({ title, value }: IDisplayComponent) => {
  return (
    <div className="flex items-center flex-col md:flex-row w-full my-6 justify-between text-lg">
      <h2 className="font-bold">{title}</h2>
      <h2>{value}</h2>
    </div>
  );
};

const MyProfile = () => {
  const { user } = useAuth();
  const [User, setUser] = useState({
    email: "",
    pangeaid: "",
    firstName: "",
    lastName: "",
    profileImg: "",
    dateOfBirth: "",
    bio: "",
    phoneNumber: "",
    password: "",
    address: {
      state: "",
      country: "",
      zipCode: "",
      city: "",
      street: "",
    },
  });
  useEffect(() => {
    axios
      .get("/users/getuserdetails/" + user?.refresh_token.identity)
      .then((res) => {
        setUser(res.data?.user);
      });
  }, [user]);
  return (
    <div className="h-full md:h-screen bg-accent flex">
      <Sidebar />
      <div className="py-10 w-full md:pl-[25%]">
        <div className="pl-20 pt-5">
          <h2 className="text-3xl font-bold text-primary">My Profile</h2>
        </div>
        <div className="px-8 md:px-16 py-10">
          <div className="flex items-center flex-col md:flex-row w-full my-6 justify-between text-lg">
            <h2 className="font-bold">Profile Picture</h2>
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
          <DisplayComponent title="First Name" value={User.firstName} />
          <DisplayComponent title="Last Name" value={User.lastName} />
          <DisplayComponent title="E-Mail" value={User.email} />
          <DisplayComponent
            title="Date of Birth"
            value={new Date(User.dateOfBirth).toDateString()}
          />
          <DisplayComponent title="Bio" value={User.bio} />
          <DisplayComponent title="Phone Number" value={User.phoneNumber} />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
