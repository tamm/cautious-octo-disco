import Airtable from "airtable";
import { env } from "../models/dotenvSchema";

Airtable.configure({
  endpointUrl: env.AIRTABLE_ENDPOINT_URL,
  apiKey: env.AIRTABLE_API_KEY,
  apiVersion: 0,
  noRetryIfRateLimited: false,
});

export const base = Airtable.base(env.AIRTABLE_DATABASE_ID);
