import { DateTime } from "luxon";

// TODO: Remove all usages of JS's Date and this function
export function toIsoDate(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${month}-${day}`;
}

export function toDateFormat(dateTime: DateTime): string {
  return dateTime.toLocaleString(DateTime.DATE_SHORT);
}

export function toTimeFormat(dateTime: DateTime): string {
  return dateTime.toLocaleString(DateTime.TIME_SIMPLE);
}
