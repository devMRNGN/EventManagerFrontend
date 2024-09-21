import HTTP_RESPONSE_STATUS from "@/http/httpResponseStatus.js";
import StandardResponse from "@common/http/standardResponse.js";
import axios from "@common/http/axios.js";

export default async (customerId) => {
    try{
        const response = await axios.get(`/event/${customerId}`);

        const { status, data } = response;
        if(status === HTTP_RESPONSE_STATUS.OK){
            return new StandardResponse(true, "Evento ativo encontrado!", data);
        }

        // Adicionar uma mensagem para todas rotas no backend
        throw new Error("Nenhum evento ativo encontrado!");
    }catch(error){
        return new StandardResponse(false, error?.message, null);
    }
};