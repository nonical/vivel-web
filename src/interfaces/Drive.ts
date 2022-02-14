import { DateTime } from "luxon";

export interface Drive {
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

export interface DriveDetails extends Drive {
  amountLeft: number;
  pendingCount: number;
  scheduledCount: number;
}
