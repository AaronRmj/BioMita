import LoginScreen from "../pages/auth";
import { useState } from "react";

type Role = "agent" | "responsable";


export default function Layout(){


    // na agent na responsable na null ilay valeur
    const [connectedRole, setConnectedRole] = useState<Role | null>(null);
    function handleLogin(role: Role){
        setConnectedRole(role);
    }
    return(
        <section>
            <div>
                {connectedRole === null ? (
                    <LoginScreen onLogin={handleLogin} />
                ):  <p>Connecté en tant que : {connectedRole}</p> }
            </div>
        </section>
    )
}
