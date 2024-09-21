import HTTP_RESPONSE_STATUS from "@common/http/httpResponseStatus.js";
import StandardResponse from "@common/http/standardResponse.js";
import axios from "@common/http/axios.js";

export default async (customerId) => {
    try{
        const response = await axios.get(`/events/${customerId}`);

        const { status, data } = response;
        if(status === HTTP_RESPONSE_STATUS.OK){
            return new StandardResponse(true, "Eventos do cliente encontrados!", data);
        }

        // Adicionar uma mensagem para todas rotas no backend
        throw new Error("Nenhum evento encontrado para esse cliente!");
    }catch(error){
        return new StandardResponse(false, error?.message, null);
    }
};