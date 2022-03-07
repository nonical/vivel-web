import { getDecodedAccessToken } from "../../../utils/auth";
import { ENDPOINTS } from "../../../utils/config";
import fetch from "../../../utils/fetch";

export interface Donation {
  donationId: string;
  status: string;
  note: string;
  leukocyteCount: number;
  erythrocyteCount: number;
  plateletCount: number;
  bloodType: string;
}

const formDataToDonation = (formData: FormData) => {
  const body: Donation = {
    donationId: formData.get("donationId") as string,
    status: formData.get("status") as string,
    note: formData.get("note") as string,
    leukocyteCount: parseInt((formData.get("leukocyteCount") as string) ?? 0),
    erythrocyteCount: parseInt(
      (formData.get("erythrocyteCount") as string) ?? 0
    ),
    plateletCount: parseInt((formData.get("plateletCount") as string) ?? 0),
    bloodType: formData.get("bloodType") as string,
  };

  return body;
};

export async function putDonation(
  formData: any,
  donationId?: string
): Promise<Donation> {
  const body = formDataToDonation(formData);
  const hospitalId = getDecodedAccessToken().hospital;

  const res = await fetch(`${ENDPOINTS.Hospitals}/${hospitalId}/donation/${donationId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error(await res.text());

  return res.json();
}
