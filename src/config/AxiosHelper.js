import axios from "axios";

export const baseUrl="http://localhost:8084";
export const httpClient=axios.create({
    baseURL:baseUrl, 
});