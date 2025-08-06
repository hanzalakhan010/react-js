import Nav from "./nav"
import { Outlet } from "react-router"
import Footer from "./Footer"

const Layout = () => {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout