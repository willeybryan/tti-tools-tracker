import path from "path";
import { getFile } from "../lib/getFile";

export const toJS = async () => {
  const file = path.resolve(__dirname, `success.json`);
  const result = await getFile(file);
  try {
    return JSON.parse(result);
  } catch (e) {
    console.log(e.message);
    return {};
  }
};

export const deploymentWebhook = toJS();
