import axios from "@common/http/axios.js";
import HTTP_RESPONSE_STATUS from "@common/http/httpResponseStatus.js";
import StandardResponse from "@common/http/standardResponse.js";

export default async (token) => {
    try{
        const response = await axios.get("/admin/schedule", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const { status, data } = response;
        if(status === HTTP_RESPONSE_STATUS.OK){
            return new StandardResponse(true, "Todos agendamentos registrados foram obtidos", data);
        }

        const { message } = data;
        throw new Error(message);
    }catch(error){
        const message = error?.response?.data?.message || error?.message || "Não foi possível obter os agendamentos registrados";
        return new StandardResponse(false, message, null);
    }
}