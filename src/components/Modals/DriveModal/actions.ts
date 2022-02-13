import { ENDPOINTS } from "../../../utils/config";

export interface Drive {
  amount: number;
  bloodType: string;
  date: string;
  hospitalId: string;
  urgency: boolean;
}

const formDataToDrive = (formData: FormData) => {
  const body: Drive = {
    bloodType: formData.get("bloodType") as string,
    hospitalId: formData.get("hospitalId") as string,
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

  const json = await res.json();

  return json;
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

  const json = await res.json();

  return json;
}
