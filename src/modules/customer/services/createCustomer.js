import HTTP_RESPONSE_STATUS from "@common/http/httpResponseStatus.js";
import StandardResponse from "@common/http/standardResponse.js";
import axios from "@common/http/axios.js";

export default async (customer) => {
    try{
        const response = await axios.post("/customer", customer);

        const { status, data } = response;
        if(status === HTTP_RESPONSE_STATUS.CREATED){
            return new StandardResponse(true, "Cliente cadastrado com sucesso!", data);
        }

        // Adicionar uma mensagem para todas rotas no backend
        throw new Error("Erro ao cadastrar cliente!");
    }catch(error){
        return new StandardResponse(false, error?.message, null);
    }
};