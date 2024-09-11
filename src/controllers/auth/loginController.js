import login from "@services/auth/login.js";
import StandardResponse from "@common/http/standardResponse.js";

export default async function loginController(email, password){
    try{
        const { success, message, data } = await login(email, password);
        return new StandardResponse(success, message, data);
    }catch(error){
        console.error("Erro ao realizar login");
        console.error(error?.message);
        return new StandardResponse(false, "Erro inesperado ao realizar login!", null);
    }
}