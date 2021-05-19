import React,  {useState, useEffect} from "react";

export const LoadingContext = React.createContext()

export const LoadingProvider = (props) => {

    const [status,setStatus] = useState(true)





    return(
        <LoadingContext.Provider value={[status,setStatus]}>
            {props.children}
        </LoadingContext.Provider>
    )
}