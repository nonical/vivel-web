import { ENDPOINTS } from "../../../utils/config";
import { toIsoDate } from "../../../utils/date";

export interface Drive {
  amount: string;
  bloodType: string;
  date: string;
  hospitalId: string;
  urgency: boolean;
}

export async function postDrive(props: any): Promise<number> {
  const body: Drive = {
    ...props,
    amount: parseInt(props.amount),
    urgency: props.urgency == "true",
  };
  const res = await fetch(ENDPOINTS.Drives, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const json = await res.json();
  console.log(json);

  return 1;
}
