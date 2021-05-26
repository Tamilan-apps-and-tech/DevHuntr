import React, {createContext, useState, useContext, useEffect} from 'react';

export const SiteContext = React.createContext()

export const SiteProvider = (props) => {

    const [site,setSite] = useState(0)




    return(
        <SiteContext.Provider value={[site,setSite]}>
            {props.children}
        </SiteContext.Provider>
    )
}