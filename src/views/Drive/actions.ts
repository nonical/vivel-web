import { ENDPOINTS } from "../../utils/config";
import { toDateFormat } from "../../utils/date";
import { DateTime } from "luxon";

export interface Drive {
  amount: number;
  bloodType: string;
  date: string;
  driveId: string;
  status: string;
  urgency: boolean;
}

export async function fetchDrives(status: string): Promise<Drive[]> {
  const res = await fetch(ENDPOINTS.Drives + `?Status=${status}`);
  const json = await res.json();

  const drives: Drive[] = json.results.map((drive: Drive) => ({
    ...drive,
    amount: (drive.amount / 1000).toFixed(2),
    date: toDateFormat(DateTime.fromISO(drive.date)),
    urgency: drive.urgency ? "Yes" : "No",
  }));

  return drives;
}
