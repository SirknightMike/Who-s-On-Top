export class ApiHandler {
    apiUrl = "https://localhost:5002";

    constructor(extendUrl: string) {
        this.apiUrl = this.apiUrl + '/' + extendUrl;
    }
}