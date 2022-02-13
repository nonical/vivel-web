export const API = process.env.REACT_APP_API_URL || "https://localhost:5001";

export const ENDPOINTS = {
  Drives: API + "/Drive",
  Donations: API + "/Donation",
};
