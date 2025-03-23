import { getToken1 } from "../auth";
import { httpClient } from "../config/AxiosHelper";

export const getHospital = async (stateid) => {
   const token=getToken1();
    const response=httpClient.get(`/hospital/state/${stateid}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
