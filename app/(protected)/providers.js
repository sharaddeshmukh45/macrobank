"use client";
import React, { createContext, useContext } from "react";

const UserInfoContext = createContext();

export const UserInfoProvider = ({ children, value }) => {
  return (
    <UserInfoContext.Provider value={value}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const userContext = () => {
  return useContext(UserInfoContext);
};
