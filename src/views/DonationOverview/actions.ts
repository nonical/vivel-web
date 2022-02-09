import { DateTime } from "luxon";
import { ENDPOINTS } from "../../utils/config";

interface Drive {
  amount: number;
  bloodType: string;
  createdAt: DateTime;
  date: DateTime;
  driveId: string;
  hospitalId: string;
  status: string;
  updatedAt: DateTime | null;
  urgency: boolean;
}

interface Donation {
  amount: number | null;
  createdAt: DateTime;
  donationId: string;
  driveId: string;
  erythrocyteCount: number | null;
  leukocyteCount: number | null;
  note: string;
  plateletCount: number | null;
  scheduledAt: DateTime | null;
  status: string;
  updatedAt: DateTime | null;
  userId: string;
}

export async function fetchDriveById(driveId: string): Promise<Drive> {
  const res = await fetch(ENDPOINTS.Drives + "/" + driveId);
  const json = await res.json();

  const drive: Drive = {
    ...json,
    date: DateTime.fromISO(json.date),
    createdAt: DateTime.fromISO(json.createdAt),
    updatedAt: json.updatedAt ? DateTime.fromISO(json.updatedAt) : null,
  };

  return drive;
}

export async function fetchDriveDonations(
  driveId: string
): Promise<Donation[]> {
  const res = await fetch(ENDPOINTS.Drives + "/" + driveId + "/donations");
  const json = await res.json();

  const donations: Donation[] = json.results.map((x: any) => ({
    ...x,
    createdAt: DateTime.fromISO(x.createdAt),
    scheduledAt: x.scheduledAt ? DateTime.fromISO(x.scheduledAt) : null,
    updatedAt: x.updatedAt ? DateTime.fromISO(x.updatedAt) : null,
  }));

  return donations;
}
