import React, { createContext, useState } from "react";

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    fullname: {
      firstname: "",
      lastname: "",
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const value = {
    user,
    setUser,
    isLoading,
    setIsLoading,
    error,
    setError,
  };
  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContext;
