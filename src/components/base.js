import Header from "./header"

import { Outlet } from "react-router-dom"

const Base = ()=>{
    return (
        <>
        <Header />
        <Outlet />
        </>
    )
}

export default Base