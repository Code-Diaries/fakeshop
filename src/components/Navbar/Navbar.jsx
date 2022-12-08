import React from 'react'
import { useSelector } from "react-redux";

const Navbar = () => {
    const { user } = useSelector((state) => state.auth);
   
    return (
        <div>Navbar
            <link rel="stylesheet" href="" />
        </div>
    )
}

export default Navbar