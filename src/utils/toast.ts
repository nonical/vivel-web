import { toast } from "react-toastify";

export function displayErrors(
  error: any,
  unknownErrorMessage = "Unknown error occured!"
): void {
  try {
    const errors = JSON.parse(error.message).errors;

    Object.values(errors).forEach((x: any) => {
      x.forEach((y: string) => toast.error(y));
    });
  } catch {
    console.error(error);
    toast.error(unknownErrorMessage);
  }
}

export function displaySuccess(message: string = "Successfully saved!"): void {
  toast.success(message);
}
