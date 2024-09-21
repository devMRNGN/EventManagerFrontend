import axios from "@common/http/axios.js";
import HTTP_RESPONSE_STATUS from "@common/http/httpResponseStatus.js";
import StandardResponse from "@common/http/standardResponse.js";

export default async (customerId, token) => {
    try{
        const response = await axios.get(`/schedule/customer/${customerId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const { status, data } = response;
        if(status === HTTP_RESPONSE_STATUS.OK){
            return new StandardResponse(true, "Evento ativo do cliente obtido", data);
        }

        const { message } = data;
        throw new Error(message);
    }catch(error){
        const message = error?.response?.data?.message || error?.message || "Erro ao obter o evento ativo do cliente";
        return new StandardResponse(false, message, null);
    }
}