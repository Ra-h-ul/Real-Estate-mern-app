import { createContext, useState } from "react";

export const AuthContext = createContext();


//taking our current user from our local storage


export const AuthContextProvider =({children})=>{
    const [currentUser,setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    return(

        <AuthContext.Provider value={{currentUser}}>
             {children}
        </AuthContext.Provider>
    );
}