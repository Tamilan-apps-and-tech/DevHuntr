import React, {createContext, useState, useContext, useEffect} from 'react';

export const SiteContext = React.createContext()

export const SiteProvider = (props) => {

    const [site,setSite] = useState(1)




    return(
        <SiteContext.Provider value={[site,setSite]}>
            {props.children}
        </SiteContext.Provider>
    )
}