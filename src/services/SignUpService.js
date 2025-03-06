import { httpClient } from "../config/AxiosHelper";

export const register=async(data)=>{
    
    const response =await httpClient.post("/user/create",data,{
        headers:{
            "Content-Type": "application/json"
        },
    });
    return response.data;
}
