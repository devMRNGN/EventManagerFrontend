import axios from "@common/http/axios.js";
import HTTP_RESPONSE_STATUS from "@common/http/httpResponseStatus.js";
import StandardResponse from "@common/http/standardResponse.js";

export default async (email, password) => {
    try{
        const response = await axios.post("/login", {
            email,
            password
        });

        const { status, data } = response;
        if(status === HTTP_RESPONSE_STATUS.OK){
            const { user, token } = data;
            return new StandardResponse(true, "Login realizado com sucesso", { user, token });
        }

        const { message } = data;
        throw new Error(message);
    }catch(error){
        const message = error?.response?.data?.message || error?.message || "Erro inesperado ao realizar login";
        return new StandardResponse(false, message, null);
    }
}