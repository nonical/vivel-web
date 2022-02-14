import { toast } from "react-toastify";

export function displayErrors(error: any): void {
  const errors = JSON.parse(error.message).errors;
  Object.values(errors).forEach((x: any) => {
    x.forEach((y: string) => toast(y));
  });
}

export function displaySuccess(): void {
  toast.success("Successfully saved");
}
