import { Employee } from "./employee-model";

export interface ApiResponse {
    code: string,
    status: string,
    message: string,
    data: Employee[]   
}