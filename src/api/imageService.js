import axios from "axios";
import { Buffer } from "buffer";

export const API_TOKEN = "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";
export const convertImg = async (text) => {
  const resp = await axios({
    url: `https://api-inference.huggingface.co/models/masibasi/doodling-ai`,
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: text,
    responseType: "arraybuffer",
  })
    .then((resp) => {
      console.log(resp);

      const mimeType = resp.headers["content-type"];
      const result = resp.data;
      const base64data = Buffer.from(result).toString("base64");
      const img = `data:${mimeType};base64,` + base64data;

      return img;
    })
    .catch((e) => {
      console.log(e);
    });

  return resp;
};
