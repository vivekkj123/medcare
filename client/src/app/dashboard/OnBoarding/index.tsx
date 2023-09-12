import axios from "@/app/axios";
import { useAuth } from "@pangeacyber/react-auth";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import "react-phone-number-input/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Interface for parameters used in InputField
interface InputFieldInterface {
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
  value: string;
  onchange: any;
  disabled?: boolean;
  maxlength?: number;
}
// Custom Input Element
const InputField = ({
  name,
  type,
  placeholder,
  required,
  value,
  onchange,
  disabled,
  maxlength,
}: InputFieldInterface) => {
  return (
    <input
      name={name}
      type={type}
      className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={onchange}
      disabled={disabled}
      maxLength={maxlength}
    />
  );
};

//Onboarding popup component - to collect more details from user

const OnBoarding = () => {
  const { user } = useAuth();
  // form state
  const [FormData, setFormData] = useState({
    email: "",
    id: "",
    firstName: "",
    lastName: "",
    profileImg: "",
    dateOfBirth: "",
    bio: "",
    password: "",
    address: {
      state: "",
      country: "",
      zipCode: "",
      city: "",
      street: "",
    },
  });
  // get existing user details from pangea and set to formData
  useEffect(() => {
    let profile = user?.profile;
    let email = user?.email;
    let id = user?.refresh_token.identity;
    let { first_name, last_name } = profile;
    setFormData({
      ...FormData,
      firstName: first_name,
      lastName: last_name,
      email: email,
      id: id,
    });
  }, [user]);
  const [phoneNumber, setphoneNumber] = useState();
  // state for checking whether onboarding is completed or not. if completed, hide popup programmatically
  const [OnboardingCompleted, setOnboardingCompleted] = useState(false);
  // form input handlechange
  const handleChange = (
    name: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...FormData, [name]: e.target.value });
  };
  // handle form submit
  let handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // phoneNumber is in different state because its from another npm library and it can't be used with existing handleChange funcction. merge it with formData here.
    let data = { ...FormData, phoneNumber: phoneNumber };
    // converts dob into ISO formate (for prisma)
    const dateobj = new Date(FormData.dateOfBirth);
    axios
      .post("/users/registeruser/", {
        ...FormData,
        phoneNumber: phoneNumber,
        dateOfBirth: dateobj,
      })
      .then((res) => {
        toast.success("Profile Updated", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .then(() => {
        setOnboardingCompleted(true);
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  return (
    <div
      className={` ${
        OnboardingCompleted ? "hidden" : "fixed"
      }  bg-opacity-75 bg-black h-full w-full py-20`}
    >
      <ToastContainer />
      <div className=" rounded-lg px-4 md:px-20 py-10 mx-auto bg-white w-[90%] md:w-[75%] h-[100%] overflow-y-scroll ">
        <h2 className="font-bold text-primary text-2xl">
          Complete your profile to continue
        </h2>
        <form className="my-8" onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            First name
          </label>
          <InputField
            name={"firstName"}
            value={FormData.firstName}
            onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("firstName", e)
            }
            type={"text"}
            placeholder={"First Name"}
            required
            disabled
          />
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Last name
          </label>
          <InputField
            name={"lastName"}
            value={FormData.lastName}
            onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("lastName", e)
            }
            type={"text"}
            placeholder={"Last Name"}
            required
            disabled
          />
          <label className="block mb-2 text-sm font-medium text-gray-900">
            E-mail
          </label>
          <InputField
            name={"email"}
            value={FormData.email}
            onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("email", e)
            }
            type={"email"}
            placeholder={"Email"}
            required
            disabled
          />
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Phone Number
          </label>
          <PhoneInput
            className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            flags={flags}
            defaultCountry="IN"
            value={phoneNumber}
            // @ts-ignore
            onChange={setphoneNumber}
          />
          <label className="block mb-2 text-sm font-medium text-gray-900">
            DOB
          </label>
          <InputField
            name={"dateOfBirth"}
            placeholder="DoB"
            value={FormData.dateOfBirth}
            onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("dateOfBirth", e)
            }
            type={"date"}
            required
          />
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Bio{" "}
          </label>
          <InputField
            name={"Bio"}
            value={FormData.bio}
            onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("bio", e)
            }
            type={"text"}
            placeholder={"Bio"}
            required
          />
          <p className="py-4 mb-1">Address</p>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Street
          </label>
          <InputField
            name={"Street"}
            value={FormData.address.street}
            onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({
                ...FormData,
                address: { ...FormData.address, street: e.target.value },
              })
            }
            type={"text"}
            placeholder={"Street"}
            required
          />
          <label className="block mb-2 text-sm font-medium text-gray-900">
            City
          </label>
          <InputField
            name={"City"}
            value={FormData.address.city}
            onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({
                ...FormData,
                address: { ...FormData.address, city: e.target.value },
              })
            }
            type={"text"}
            placeholder={"City"}
            required
          />
          <label className="block mb-2 text-sm font-medium text-gray-900">
            State
          </label>
          <InputField
            name={"State"}
            value={FormData.address.state}
            onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({
                ...FormData,
                address: { ...FormData.address, state: e.target.value },
              })
            }
            type={"text"}
            placeholder={"State"}
            required
          />
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Country
          </label>
          <InputField
            name={"Country"}
            value={FormData.address.country}
            onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({
                ...FormData,
                address: { ...FormData.address, country: e.target.value },
              })
            }
            type={"text"}
            placeholder={"Country"}
            required
          />
          <label className="block mb-2 text-sm font-medium text-gray-900">
            ZIP Code
          </label>
          <InputField
            name={"ZipCode"}
            value={FormData.address.zipCode}
            onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({
                ...FormData,
                address: { ...FormData.address, zipCode: e.target.value },
              })
            }
            type={"number"}
            placeholder={"ZIP Code"}
            required
          />
          <label className="block mb-2 text-sm font-medium text-gray-900">
            6-digit PIN (This PIN would be used for accessing documents when you
            share)
          </label>
          <InputField
            name={"pin"}
            value={FormData.password}
            onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("password", e)
            }
            type={"tel"}
            maxlength={6}
            placeholder={"PIN (Only digits allowed)"}
            required
          />
          <input
            className="px-8 text-white font-bold rounded-md py-1 my-4 bg-primary cursor-pointer"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default OnBoarding;
