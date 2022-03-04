import React from "react"

export const userStoreContext = React.createContext();

const UserStoreProvider = ({children})=>{
    
    const [profile,setprofile] = React.useState(null);

    const userStore = {
        profile : profile,
        updateprofile : (profile)=> setprofile(profile)
    }

    return(
        <userStoreContext.Provider value = {userStore}>
            {children}
        </userStoreContext.Provider>
    )
} 

export default UserStoreProvider;