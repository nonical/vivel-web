import { getDecodedAccessToken } from "../../utils/auth";
import { ENDPOINTS } from "../../utils/config";
import fetch from "../../utils/fetch";

export interface Hospital {
  name: string;
}

export async function fetchHospital(): Promise<Hospital> {
  const res = await fetch(`${ENDPOINTS.Hospitals}/${getDecodedAccessToken().hospital}`
  );
  const hospital: Hospital = await res.json();

  return hospital;
}
