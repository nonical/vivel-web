import { DateTime } from "luxon";
import { Donation } from "../../interfaces/Donations";
import { Drive, DriveDetails } from "../../interfaces/Drive";
import { getDecodedAccessToken } from "../../utils/auth";
import { ENDPOINTS } from "../../utils/config";
import fetch from "../../utils/fetch";

export async function fetchDriveById(driveId: string): Promise<DriveDetails> {
  const hospitalId = getDecodedAccessToken().hospital;

  const res = await fetch(`${ENDPOINTS.Hospitals}/${hospitalId}/drives/${driveId}/details`);
  const json = await res.json();

  const drive: DriveDetails = {
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
  const hospitalId = getDecodedAccessToken().hospital;

  const res = await fetch(`${ENDPOINTS.Hospitals}/${hospitalId}/drive/${driveId}/donations`);
  const json = await res.json();

  const donations: Donation[] = json.results.map((x: any) => ({
    ...x,
    createdAt: DateTime.fromISO(x.createdAt),
    scheduledAt: x.scheduledAt ? DateTime.fromISO(x.scheduledAt) : null,
    updatedAt: x.updatedAt ? DateTime.fromISO(x.updatedAt) : null,
  }));

  return donations;
}

export async function closeDrive(drive: Drive) {
  const hospitalId = getDecodedAccessToken().hospital;
  const res = await fetch(`${ENDPOINTS.Hospitals}/${hospitalId}/drive/${drive.driveId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...drive,
      status: "Closed",
    }),
  });

  if (!res.ok) throw new Error(await res.text());

  return res.json();
}

// TODO: Update other actions to use this action (updating donations in scheduled donations list)
export async function updateDonation(donation: Donation) {
  const hospitalId = getDecodedAccessToken().hospital;

  const res = await fetch(`${ENDPOINTS.Hospitals}/${hospitalId}/donation/${donation.donationId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(donation),
  });

  if (!res.ok) throw new Error(await res.text());

  return res.json();
}
