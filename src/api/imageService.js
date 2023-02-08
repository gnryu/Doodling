import axios from "axios";
import { Buffer } from "buffer";

export const API_TOKEN = "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";
const API_TOKEN2 = "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";
export const convertImg = (text) => {
  const inputData = {
    inputs: `doodling-ai2, ${text}`,
    options: {
      wait_for_model: true,
      use_cache: false,
    },
  };

  return new Promise((resolve, reject) => {
    const url = `https://huggingface.co/Serena47/doodling-ai2`;
    const url0 = `https://api-inference.huggingface.co/models/masibasi/doodling-ai`;
    //
    axios({
      url: url,
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_TOKEN2}`,
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
