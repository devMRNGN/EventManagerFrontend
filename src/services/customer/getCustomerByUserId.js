import axios from "@common/http/axios.js";
import HTTP_RESPONSE_STATUS from "@common/http/httpResponseStatus.js";
import StandardResponse from "@common/http/standardResponse.js";

export default async (userId) => {
    try{
        const response = await axios.get(`/customer/user/${userId}`);
        const { status, data } = response;
        if(status === HTTP_RESPONSE_STATUS.OK){
            const customer = data;
            delete customer.user;
            return new StandardResponse(true, "Dados do cliente obtidos com sucesso", customer);
        }

        const { message } = data;
        throw new Error(message);
    }catch(error){
        const message = error?.response?.data?.message || error?.message || "Usuário não é um cliente";
        return new StandardResponse(false, message, null);
    }
}