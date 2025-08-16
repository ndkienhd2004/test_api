import axios from "axios";

export const formInstance = axios.create({
  baseURL: "http://192.168.193.202:8069/api/self",
  timeout: 5000,
});

formInstance.interceptors.request.use(
  (config) => {
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }
    config.headers["User-Agent"] =
      "Mozilla/5.0 (Linux; Android 12; sdk_gphone64_arm64 Build/SE1A.220630.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.114 Mobile Safari/537.36";
    console.log("request success: ", config);
    return config;
  },
  (error) => Promise.reject(error)
);
