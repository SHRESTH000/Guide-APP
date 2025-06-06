import { httpClient } from "../config/AxiosHelper";

export const generateToken =async(data)=>{

    const response=await httpClient.post("/generate-token",data,{
        headers:{
            "Content-Type":"application/json"
        },
    });
    //localStorage.setItem("token",response.data);
    return response.data;

}
export const  loginUser=(userData)=>{

    localStorage.setItem("token",userData.token);
}
export const getToken=()=>{
    return localStorage.getItem("token");
}