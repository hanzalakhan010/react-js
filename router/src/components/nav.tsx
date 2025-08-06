import {  NavLink } from "react-router";

const Nav = () => {
    return (
        <>
            <NavLink className={({isActive})=>(isActive?'isActive':'')} to='/'>Home</NavLink>
            <NavLink className={({isActive})=>(isActive?'isActive':'')} to='/contact'>Contact</NavLink>
            <NavLink className={({isActive})=>(isActive?'isActive':'')} to='/about'>About</NavLink>
        </>)
}

export default Nav;