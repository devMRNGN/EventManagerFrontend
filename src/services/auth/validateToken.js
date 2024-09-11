import axios from "@common/http/axios.js";
import HTTP_RESPONSE_STATUS from "@common/http/httpResponseStatus.js";
import StandardResponse from "@common/http/standardResponse.js";

export default async (body) => {
    try{
        const response = await axios.post("/validate_token", body);
        const { status, data } = response;
        if(status === HTTP_RESPONSE_STATUS.OK){
            return new StandardResponse(true, "Token válido", data);
        }

        const { message } = data;
        throw new Error(message);
    }catch(error){
        const message = error?.response?.data?.message || error?.message || "Erro inesperado ao validar o token";
        return new StandardResponse(false, message, null);
    }
}
