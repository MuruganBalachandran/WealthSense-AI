import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext({
  userDetails: {
    username: "John Doe",
    mobile: "+1 234 567 8900",
    email: "john@example.com",
    profilePhoto: "https://via.placeholder.com/150"
  },
  updateUserDetails: () => {}
});

export function UserProvider({ children }) {
  const [userDetails, setUserDetails] = useState({
    username: "John Doe",
    mobile: "+1 234 567 8900",
    email: "john@example.com",
    profilePhoto: "https://via.placeholder.com/150"
  });

  const updateUserDetails = (newDetails) => {
    setUserDetails(newDetails);
  };

  return (
    <UserContext.Provider value={{ userDetails, updateUserDetails }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
