import register from "@auth/services/register.js";
import StandardResponse from "@common/http/standardResponse.js";

export default async function registerController(body){
    try{
        const { success, message } = await register({ ...body });
        return new StandardResponse(success, message, null);
    }catch(error){
        console.error("Erro ao cadastrar usuário");
        console.error(error?.message);
        return new StandardResponse(false, "Erro inesperado ao cadastrar usuário!", null);
    }
}