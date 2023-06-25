import React, { createContext, useState } from 'react';
export const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const updateUser = (data) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      ...data
    }));
  };

  return (
    <UserContext.Provider value={{ userData, updateUser, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

// import React, { createContext, useState } from 'react';
// export const UserContext = createContext();

// export const UserProvider = ({ children, initialData }) => {
//   const [userData, setUserData] = useState(initialData);

//   const updateUser = (data) => {
//     setUserData((prevUserData) => ({
//       ...prevUserData,
//       ...data
//     }));
//   };

//   return (
//     <UserContext.Provider value={{ userData, updateUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
