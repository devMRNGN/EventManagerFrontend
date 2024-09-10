export default class StandardResponse{
    constructor(success, message, data){
        this.success = success;
        this.message = message;
        this.data = data;
    }
}