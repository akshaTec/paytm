import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/UserComponent";

export function Dashboard(){
    return <div className="p-4">
        <AppBar/>
        <div>
            <Balance value={"1000"}/>
            <Users/>
        </div>
    </div>
}