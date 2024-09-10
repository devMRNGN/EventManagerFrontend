import { useContext } from "react";
import { AuthContext } from "@auth/hooks/AuthContext/AuthContext.jsx";

export function useAuth() {
    const context = useContext(AuthContext);
    if(context === undefined){
        throw new Error('para acessar useAuth precisa ser um componente filho');
    }
    return context;
}