import register from "@services/auth/register.js";
import StandardResponse from "@common/http/standardResponse.js";

export default async function registerController(body){
    try{
        const { success, message, data } = await register({ ...body });
        return new StandardResponse(success, message, data);
    }catch(error){
        console.error("Erro ao cadastrar usuário");
        console.error(error?.message);
        return new StandardResponse(false, "Erro inesperado ao cadastrar usuário!", null);
    }
}