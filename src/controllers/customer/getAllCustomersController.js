import getAllCustomers from "@services/customer/getAllCustomers.js";
import StandardResponse from "@common/http/standardResponse.js";

export default async function getAllCustomersController(token){
    try{
        const { success, message, data } = await getAllCustomers(token);
        return new StandardResponse(success, message, data);
    }catch(error){
        console.error("Erro ao buscar os clientes cadastrados");
        console.error(error?.message);
        return new StandardResponse(false, "Erro inesperado ao buscar os clientes cadastrados", null);
    }
}