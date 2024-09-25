import getAllSchedules from "@services/schedule/getAllSchedules.js";
import StandardResponse from "@common/http/standardResponse.js";

export default async function getAllSchedulesController(token){
    try{
        const { success, message, data } = await getAllSchedules(token);
        return new StandardResponse(success, message, data);
    }catch(error){
        console.error("Erro ao obter evento do cliente");
        console.error(error?.message);
        return new StandardResponse(false, "Erro inesperado ao obter os agendamentos registrados", null);
    }
}