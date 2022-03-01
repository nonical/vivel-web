import { ENDPOINTS } from "../../../utils/config";
import fetch from "../../../utils/fetch";

export interface LitresByBloodTypeReport {
  hospitalId: string;
  from: string;
  to: string;
  urgency: string;
}

const formDataToQueryString = (formData: FormData) => {
  const from = formData.get("from") as string;
  const to = formData.get("to") as string;
  const urgency = formData.get("urgency") as string;

  let queryString = `?from=${from}&to=${to}`;

  if (urgency != "All") {
    queryString += `&urgency=${urgency}`;
  }

  return queryString;
};

export async function fetchBloodTypeLitresReport(
  formData: FormData,
  hospitalId: string
) {
  let queryString = formDataToQueryString(formData);

  const res = await fetch(
    ENDPOINTS.Hospitals +
      `/${hospitalId}/report/litresbybloodtype` +
      queryString
  );

  if (!res.ok) throw new Error(await res.text());

  const blob = await res.blob();

  let url = window.URL.createObjectURL(blob);

  let a = document.createElement("a");
  a.href = url;
  a.download = "report.pdf";
  a.click();
}
