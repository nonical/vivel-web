import { DateTime } from "luxon";

export interface Donation {
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
  userName: string;
}
