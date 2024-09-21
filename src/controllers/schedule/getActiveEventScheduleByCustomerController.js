import getActiveEventScheduleByCustomer from "@services/schedule/getActiveEventScheduleByCustomer.js";
import StandardResponse from "@common/http/standardResponse.js";

export default async function getActiveEventScheduleByCustomerController(customerId, token){
    try{
        const { success, message, data } = await getActiveEventScheduleByCustomer(customerId, token);
        return new StandardResponse(success, message, data);
    }catch(error){
        console.error("Erro ao obter evento do cliente");
        console.error(error?.message);
        return new StandardResponse(false, "Erro inesperado ao obter evento ativo do cliente!", null);
    }
}