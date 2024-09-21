import axios from "@common/http/axios.js";
import HTTP_RESPONSE_STATUS from "@common/http/httpResponseStatus.js";
import StandardResponse from "@common/http/standardResponse.js";

export default async (token) => {
    try{
        const response = await axios.get("/admin/customer", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const { status, data } = response;
        if(status === HTTP_RESPONSE_STATUS.OK){
            return new StandardResponse(true, "Clientes buscados com sucesso", data);
        }

        const { message } = data;
        throw new Error(message);
    }catch(error){
        const message = error?.response?.data?.message || error?.message || "Erro inesperado ao buscar todos clientes";
        return new StandardResponse(false, message, null);
    }
}