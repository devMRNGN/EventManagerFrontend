import createSchedule from "@services/schedule/createSchedule.js";
import StandardResponse from "@common/http/standardResponse.js";

export default async function createScheduleController(body, token){
    try{
        const { success, message, data } = await createSchedule({ ...body }, token);
        return new StandardResponse(success, message, data);
    }catch(error){
        console.error("Erro ao agendar evento");
        console.error(error?.message);
        return new StandardResponse(false, "Erro inesperado ao agendar evento!", null);
    }
}