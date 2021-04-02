import { EnvType, load } from "ts-dotenv";

export type Env = EnvType<typeof schema>;

export const schema = {
  PORT: {
    type: Number,
    optional: true,
    default: 8080,
  },
  APP_NAME: {
    type: /^[-a-z]+$/,
    optional: true,
  },
  BASE_URL: {
    type: String,
    optional: true,
  },
  API_KEY: {
    type: String,
    optional: true,
  },
  AIRTABLE_API_KEY: {
    type: String,
    optional: true,
  },
  AIRTABLE_DATABASE_ID: {
    type: String,
    optional: true,
  },
  AIRTABLE_ENDPOINT_URL: {
    type: String,
    optional: true,
  },
  NODE_ENV: ["production" as const, "development" as const],
};

export let env: Env;

export function loadEnv(): void {
  env = load(schema);
}
