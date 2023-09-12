"use client";
import { useAuth } from "@pangeacyber/react-auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Hero = () => {
  const router = useRouter();
  const { authenticated, login, logout } = useAuth();
  return (
    <div className=" bg-accent grid md:grid-cols-2 py-16 px-16 md:px-20 items-center">
      <div className="flex flex-col order-2 md:order-1 justify-center font-bold ">
        <h2 className="text-4xl md:text-7xl leading-snug">
          Your Medical Record,
        </h2>
        <h4 className="text-xl md:text-3xl my-10">
          but more secure and encrypted 🔒{" "}
        </h4>
        <a
          className="w-[70%] md:w-[30%] text-center rounded-md text-primary bg-secondary px-6 py-4 cursor-pointer"
          onClick={() => (authenticated ? router.push("/dashboard") : login())}
        >
          {authenticated ? "Go to Dashboard" : "Create MedCare ID"}
        </a>
        <div className="flex gap-2 md:gap-5 mt-10 items-center">
          <h2 className="text-lg md:text-xl">Security Partner</h2>
          <Image
            alt="Pangea logo"
            src={"/icons/pangea.svg"}
            height={20}
            width={120}
          />
        </div>
      </div>
      <div className="order-1 md:order-2 w-full">
        <Image
          alt="Illustration of Doctor using computer systems"
          src={"/illustration.png"}
          className="ml-auto"
          width={500}
          height={500}
        />
        {/* <img className="w-96 h-auto ml-auto" src="/illustration.png" alt="" /> */}
      </div>
    </div>
  );
};

export default Hero;
