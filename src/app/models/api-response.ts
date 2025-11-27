import { Employee } from "./Employee";

export interface ApiResponse {
    code: string,
    status: string,
    message: string,
    data: Employee[]   
}