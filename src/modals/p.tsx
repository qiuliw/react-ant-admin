import { Outlet } from "@umijs/max";

export default function() {
    return (
        <div>
            <h2>父组件</h2>
            <Outlet/>
        </div>
    )
}