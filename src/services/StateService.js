import { getToken1 } from "../auth";
import { httpClient } from "../config/AxiosHelper";


export const getState = async (stateName) => {
    const token=getToken1();
  const response=httpClient.get(`/state/name/${stateName}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
