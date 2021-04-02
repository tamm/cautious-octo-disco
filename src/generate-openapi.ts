import swaggerJsdoc from "swagger-jsdoc";
import { env } from "./models/dotenvSchema";

const url = env.APP_URL || `http://localhost:${env.PORT}`;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: env.HEROKU_APP_NAME || "OpenAPI spec",
      version: "1.0.0",
    },
    // Provide URL to where we expect to exist for this demo.
    servers: [{ url }],
  },
  // Target all files containing annotations according to standard found at
  // https://www.npmjs.com/package/swagger-jsdoc
  // Make sure they are readable at runtime.
  apis: ["./src/**/*.ts"],
};

export function generateSpec() {
  return swaggerJsdoc(options);
}
