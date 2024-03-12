import { Outlet } from "react-router-dom";

export default function CustomerIndexComponent() {
    return (
        <>
            <h1>Customer Dashboard</h1>
            <Outlet></Outlet>
        </>
    )
}