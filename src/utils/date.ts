import { DateTime } from "luxon";

export function toDateFormat(dateTime: DateTime): string {
  return dateTime.toLocaleString(DateTime.DATE_SHORT);
}

export function toTimeFormat(dateTime: DateTime): string {
  return dateTime.toLocaleString(DateTime.TIME_SIMPLE);
}
