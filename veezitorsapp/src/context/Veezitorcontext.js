"use client"
import { createContext, useState } from "react";


export const UserData = createContext();

const Veezitorcontext = ({ children }) => {
    const [isOpen, setIsOpen] = useState();
    const {test} = 'dddddddd'
  
    return (
      <UserData.Provider value={{isOpen,test}} >
        {children}
      </UserData.Provider>
    );
  }

  export default  Veezitorcontext ;
