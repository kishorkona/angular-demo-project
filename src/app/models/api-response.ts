import { Employee } from "./employee";

export interface ApiResponse {
    code: string,
    status: string,
    message: string,
    data: Map<string, any>
}