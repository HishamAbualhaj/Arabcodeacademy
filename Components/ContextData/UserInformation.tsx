/**
 * UserInformation Component
 *
 * This component is a context provider designed to manage and provide user information throughout
 * an application. It initializes with default user information and updates it based on user actions
 * across different components that consume this context. This allows for a centralized management
 * and distribution of user data, particularly useful during the sign-up process across multiple steps.
 *
 * @component
 *
 * @param {Object} props - The properties passed to the UserInformation component.
 * @param {ReactNode} props.children - The children components that will have access to the context.
 *
 * @example
 * <UserInformation>
 *   <App />
 * </UserInformation>
 *
 * @returns {React.ReactElement}
 * A context provider that wraps child components, allowing them to access and modify user information
 * as needed through a centralized state management system.
 */
 
/**
 * UserContextProvider
 *
 * Context for managing user information across components, particularly useful in multi-step forms like
 * sign-up processes. It provides a method to update user information and keeps track of the current state
 * of user data.
 *
 * @context
 * @type {Object} UserContextType - Defines the structure of the context which includes user information
 * and a function to update it. The user information conforms to the types defined by SignUpTypePageOne
 * or SignUpTypePageTwo.
 *
 * @example
 * const { userInformation, setUserInformation } = useContext(UserContextProvider);
 * setUserInformation({ email: 'example@example.com' });
 *
 * @returns {UserContextType} The current user information and a setter function for updating it.
 */


"use client";
import React, { createContext, ReactNode, useState } from "react";
import {
  SignUpTypePageOne,
  SignUpTypePageTwo,
} from "../FormComponents/signUpValidation";

type UserContextType = (SignUpTypePageOne | SignUpTypePageTwo) & {setUserInformation: (userInfo:SignUpTypePageOne | SignUpTypePageTwo) => void}  ; 

export const UserContextProvider = createContext<UserContextType| undefined>(
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
    termsAccepted: "",
  });

  const value  = {
    ...userInformation,
    setUserInformation : (userInfo:SignUpTypePageOne | SignUpTypePageTwo) => {
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
