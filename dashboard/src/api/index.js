import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://tvztjkwemzrcuvxxcbpb.supabase.co/rest/v1",
  timeout: 5000,
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2enRqa3dlbXpyY3V2eHhjYnBiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQzNTk3MzMsImV4cCI6MTk3OTkzNTczM30.8G2iWwdOMiRtuHRIpFENKBtzxxK5mx7l1T8mZlmIQnw",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => ({
    ...error.response,
    message: error.message,
  })
);

export const api = {
  getAllData: () => axiosInstance.get("bet"),
  getRangeData: ({ startDate, endDate }) =>
    axiosInstance.get(
      `bet?race_date=gte.${startDate}&race_date=lte.${endDate}`
    ),
};
