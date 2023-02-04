import axios from "axios";
import { Buffer } from "buffer";

export const API_TOKEN = "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";
export const convertImg = (text) => {
  const inputData = {
    inputs: `doodling-ai, ${text}`,
    options: {
      wait_for_model: true,
      use_cache: false,
    },
  };

  return new Promise((resolve, reject) => {
    axios({
      url: `https://api-inference.huggingface.co/models/masibasi/doodling-ai`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify(inputData),
      responseType: "arraybuffer",
    })
      .then((resp) => {
        console.log(text);

        const mimeType = resp.headers["content-type"];
        const result = resp.data;
        const base64data = Buffer.from(result).toString("base64");
        const img = `data:${mimeType};base64,` + base64data;

        resolve(img);
      })
      .catch((e) => {
        console.log(e);
        reject(e);
      });
  });
};
