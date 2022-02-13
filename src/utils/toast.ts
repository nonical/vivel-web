import { toast } from "react-toastify";

export function displayErrors(error: any): void {
  const errors = JSON.parse(error.message).errors;
  for (const key in errors) {
    errors[key].forEach((x: string) => toast.error(x));
  }
}
