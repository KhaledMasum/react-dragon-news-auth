import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <h1 className="bg-red-500">Hello</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;