import { ENDPOINTS } from "../../../utils/config";
import fetch from "../../../utils/fetch";

export interface DriveReport {
  hospitalId: string;
  from: string;
  to: string;
  status: string;
  urgency: string;
}

const formDataToQueryString = (formData: FormData) => {
  const from = formData.get("from") as string;
  const to = formData.get("to") as string;
  const status = formData.get("status") as string;
  const urgency = formData.get("urgency") as string;

  let queryString = `?from=${from}&to=${to}`;

  if (status != "All") {
    queryString += `&status=${status}`;
  }

  if (urgency != "All") {
    queryString += `&urgency=${urgency}`;
  }

  return queryString;
};

export async function fetchDriveReport(formData: FormData, hospitalId: string) {
  let queryString = formDataToQueryString(formData);

  const res = await fetch(
    ENDPOINTS.Hospitals + `/${hospitalId}/report/drives` + queryString
  );

  if (!res.ok) throw new Error(await res.text());

  const blob = await res.blob();

  let url = window.URL.createObjectURL(blob);

  let a = document.createElement("a");
  a.href = url;
  a.download = "report.pdf";
  a.click();
}
