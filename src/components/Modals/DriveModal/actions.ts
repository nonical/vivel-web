import { getDecodedAccessToken } from "../../../utils/auth";
import { ENDPOINTS } from "../../../utils/config";
import fetch from "../../../utils/fetch";

export interface Drive {
  amount: number;
  status: string;
  bloodType: string;
  date: string;
  hospitalId: string;
  urgency: boolean;
}

const formDataToDrive = (formData: FormData) => {
  const body: Drive = {
    status: formData.get("status") as string,
    bloodType: formData.get("bloodType") as string,
    hospitalId: getDecodedAccessToken().hospital,
    date: formData.get("date") as string,
    amount: parseInt(formData.get("amount") as string),
    urgency: (formData.get("urgency") as string) == "true",
  };

  return body;
};

export async function postDrive(formData: FormData): Promise<Drive> {
  const body = formDataToDrive(formData);

  const res = await fetch(ENDPOINTS.Drives, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error(await res.text());

  return res.json();
}

export async function putDrive(
  formData: any,
  driveId?: string
): Promise<Drive> {
  const body = formDataToDrive(formData);

  const res = await fetch(ENDPOINTS.Drives + `/${driveId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error(await res.text());

  return res.json();
}
