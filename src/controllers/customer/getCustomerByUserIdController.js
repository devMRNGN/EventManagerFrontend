import getCustomerByUserId from "@services/customer/getCustomerByUserId.js";
import StandardResponse from "@common/http/standardResponse.js";

export default async function createScheduleController(userId){
    try{
        const { success, message, data } = await getCustomerByUserId(userId);
        return new StandardResponse(success, message, data);
    }catch(error){
        console.error("Erro ao obter dados do cliente");
        console.error(error?.message);
        return new StandardResponse(false, "Erro ao obter dados do cliente", null);
    }
}