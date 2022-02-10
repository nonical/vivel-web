import { ENDPOINTS } from "../../../utils/config";

export interface Drive {
  amount: number;
  bloodType: string;
  date: string;
  hospitalId: string;
  urgency: boolean;
}

export async function postDrive(drive: Drive): Promise<Drive> {
  const res = await fetch(ENDPOINTS.Drives, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(drive),
  });

  const json = await res.json();

  return json;
}
