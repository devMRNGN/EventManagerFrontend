import createEvent from "@services/partyEvent/createEvent.js";
import StandardResponse from "@common/http/standardResponse.js";

export default async function createEventController(body, token){
    try{
        const { success, message, data } = await createEvent({ ...body }, token);
        return new StandardResponse(success, message, data);
    }catch(error){
        console.error("Erro ao cadastrar evento");
        console.error(error?.message);
        return new StandardResponse(false, "Erro inesperado ao cadastrar evento!", null);
    }
}