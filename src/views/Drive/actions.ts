import { DateTime } from "luxon";
import { getDecodedAccessToken } from "../../utils/auth";
import { ENDPOINTS } from "../../utils/config";
import fetch from "../../utils/fetch";

export interface Drive {
  amount: number;
  bloodType: string;
  date: DateTime;
  driveId: string;
  status: string;
  urgency: boolean;
}

export async function fetchDrives(status: string): Promise<Drive[]> {
  const hospitalId = getDecodedAccessToken().hospital;
  const res = await fetch(`${ENDPOINTS.Hospitals}/${hospitalId}/drives?Status=${status}`);
  const json = await res.json();

  const drives: Drive[] = json.results.map((drive: any) => ({
    ...drive,
    amount: (drive.amount / 1000).toFixed(2),
    date: DateTime.fromISO(drive.date),
    urgency: drive.urgency ? "Yes" : "No",
  }));

  return drives;
}
