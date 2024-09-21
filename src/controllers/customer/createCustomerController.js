import createCustomer from "@services/customer/createCustomer.js";
import StandardResponse from "@common/http/standardResponse.js";

export default async function createCustomerController(body){
    try{
        const { success, message, data } = await createCustomer({ ...body });
        return new StandardResponse(success, message, data);
    }catch(error){
        console.error("Erro ao cadastrar cliente");
        console.error(error?.message);
        return new StandardResponse(false, "Erro inesperado ao cadastrar cliente!", null);
    }
}