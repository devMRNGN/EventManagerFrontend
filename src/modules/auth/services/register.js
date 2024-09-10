import axios from "@common/http/axios.js";
import HTTP_RESPONSE_STATUS from "@common/http/httpResponseStatus.js";
import StandardResponse from "@common/http/standardResponse.js";

export default async (user) => {
    try{
        const response = await axios.post("/register", user);
        const { status, data } = response;
        if(status === HTTP_RESPONSE_STATUS.CREATED){
            return new StandardResponse(true, "Usuário cadastrado com sucesso", data);
        }

        const { message } = data;
        throw new Error(message);
    }catch(error){
        const message = error?.response?.data?.message || error?.message || "Erro inesperado ao cadastrar usuário";

        return new StandardResponse(false, message, null);
    }
}
