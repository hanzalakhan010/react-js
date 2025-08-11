import React from 'react'


interface Site {
    id: number;
    title: string;
    da: number;
    url: string;
    contact: string;
}
interface SiteContextType {
    siteList: Site[],
    setSiteList: React.Dispatch<React.SetStateAction<Site[]>>
}

export const SiteContext = React.createContext<SiteContextType>({
    siteList: [],
    setSiteList: () => { }
})


