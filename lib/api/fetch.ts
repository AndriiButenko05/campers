import { Camper, CampersApiResponse } from "@/types/camper";
import { isAxiosError } from "axios";
import { nextServer } from "./api";

export interface GetCampersParams {
  page?: number;
  limit?: number;
  location?: string;
  form?: string;
  transmission?: string;
  AC?: boolean;
  bathroom?: boolean;
  kitchen?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  water?: boolean;
}

export async function getCampers(params: GetCampersParams):Promise<CampersApiResponse> {
    try {
    const cleanParams = Object.fromEntries(
      Object.entries(params).filter(([_, v]) => v != null && v !== "")
    );
    const { data } = await nextServer.get<CampersApiResponse>("/campers", {
      params: cleanParams,
    });

    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Fetching campers failed');
    }
    throw new Error('Fetching campers failed');
  }
    
}
export async function fetchCamperById(
  id: string
): Promise<Camper> {
  try {
    const { data } = await nextServer.get<Camper>(
      `/campers/${id}`,
      { withCredentials: false }
    );
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Fetching good failed');
    }
    throw new Error('Fetching good failed');
  }
}