import { ENDPOINTS } from "../../utils/config";
import { toIsoDate } from "../../utils/date";

export interface Drive {
  amount: number;
  bloodType: string;
  createdAt: Date;
  date: Date;
  driveId: string;
  hospitalId: string;
  status: string;
  updatedAt: Date | null;
  urgency: boolean;
}

export async function fetchDrives(status: string): Promise<Drive[]> {
  const res = await fetch(ENDPOINTS.Drives + `?Status=${status}`);
  const json = await res.json();

  const drives: Drive[] = json.results.map((drive: Drive) => ({
    ...drive,
    amount: drive.amount / 1000,
    date: toIsoDate(new Date(drive.date)),
    urgency: drive.urgency ? "Yes" : "No",
  }));

  return drives;
}
