import React,  {useState, useEffect} from "react";

export const PageContext = React.createContext()

export const PageProvider = (props) => {

    const [page,setPage] = useState(1)





    return(
        <PageContext.Provider value={[page,setPage]}>
            {props.children}
        </PageContext.Provider>
    )
}