import React, {createContext, useState, useContext, useEffect} from 'react';

export const ResContext = React.createContext()

export const ResProvider = (props) => {

    const [res,setRes] = useState(0)




    return(
        <ResContext.Provider value={[res,setRes]}>
            {props.children}
        </ResContext.Provider>
    )
}