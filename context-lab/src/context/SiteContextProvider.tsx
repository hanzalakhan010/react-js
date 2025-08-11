import { useState } from "react"
import { SiteContext } from "./SiteContent"

const initialState = [
    {
        id: 1,
        title: 'Example Site',
        da: 55,
        url: 'https://example.com',
        contact: 'a@a.com',
    },
    {
        id: 2,
        title: 'Tech Blog',
        da: 42,
        url: 'https://techblog.com',
        contact: 'contact@techblog.com',
    },
    {
        id: 3,
        title: 'News Portal',
        da: 60,
        url: 'https://newsportal.com',
        contact: 'editor@newsportal.com',
    },
]
const SiteContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [siteList, setSiteList] = useState(initialState)
    return (
        <>
            <SiteContext.Provider value={{ siteList, setSiteList }} >{children}</SiteContext.Provider>
        </>
    )
}
export default SiteContextProvider