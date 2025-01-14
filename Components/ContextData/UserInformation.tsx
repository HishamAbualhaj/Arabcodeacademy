"use client";
import React, { createContext, ReactNode, useState } from "react";
import {
  SignUpTypePageOne,
  SignUpTypePageTwo,
} from "../FormComponents/signUpValidation";

interface UserContextType extends SignUpTypePageOne, SignUpTypePageTwo {
  setUserInformation: (userInfo: SignUpTypePageOne | SignUpTypePageTwo) => void;
}

export const UserContextProvider = createContext<UserContextType | undefined>(
  undefined
);

const UserInformation: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userInformation, setUserInformation] = useState<
    SignUpTypePageOne | SignUpTypePageTwo
  >({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
  });

  const value = {
    ...userInformation,
    setUserInformation: (userInfo: SignUpTypePageOne | SignUpTypePageTwo) => {
      setUserInformation((preValue) => ({ ...preValue, ...userInfo }));
    },
  };

  return (
    <UserContextProvider.Provider value={value}>
      {children}
    </UserContextProvider.Provider>
  );
};

export default UserInformation;
