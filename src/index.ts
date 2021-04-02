import { loadEnv } from "./models/dotenvSchema";

loadEnv();

require("./server");
