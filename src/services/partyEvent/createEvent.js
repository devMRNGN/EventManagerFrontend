import axios from "@common/http/axios.js";
import HTTP_RESPONSE_STATUS from "@common/http/httpResponseStatus.js";
import StandardResponse from "@common/http/standardResponse.js";

export default async (event, token) => {
    try{
        const response = await axios.post("/event", event, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const { status, data } = response;
        if(status === HTTP_RESPONSE_STATUS.CREATED){
            return new StandardResponse(true, "Evento cadastrado com sucesso", data);
        }

        const { message } = data;
        throw new Error(message);
    }catch(error){
        console.log(error?.response?.data?.message);
        const message = error?.response?.data?.message || error?.message || "Erro inesperado ao cadastrar evento";
        return new StandardResponse(false, message, null);
    }
}