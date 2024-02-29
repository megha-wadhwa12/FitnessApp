import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();
const Context = ({children}) => {
    const [foodData,setFoodData] = useState([])
    
    return (
        <UserContext.Provider value={{ foodData,setFoodData }}>
          {children}
        </UserContext.Provider>
      );
}

export default Context

