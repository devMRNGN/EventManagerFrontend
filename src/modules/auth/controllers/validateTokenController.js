import validateToken from "@auth/services/validateToken.js";
import StandardResponse from "@common/http/standardResponse.js";

export default async function validateTokenController(token){
    try{
        const { success, message } = await validateToken({ token });
        return new StandardResponse(success, message, null);
    }catch(error){
        console.error("Erro ao validar token do usuário");
        console.error(error?.message);
        return new StandardResponse(false, "Erro inesperado ao validar token do usuário", null);
    }
}