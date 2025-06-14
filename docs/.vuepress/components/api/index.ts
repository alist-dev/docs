export const apis: Record<string, string> = {
  new: "https://new-api.nn.ci",
};

if (typeof location !== "undefined") {
  if (
    location.origin.startsWith("http://localhost") ||
    location.origin.startsWith("http://127.0.0.1")
  ) {
    apis.local = "http://localhost:3002";
  }
}

export const defaultApi = "new";
export const api = (path?: string) => {
  let _api = "";
  if (typeof localStorage === "undefined") {
    _api = apis[defaultApi];
  } else {
    _api = apis[localStorage.getItem("api_name") || defaultApi];
  }
  if (path) {
    return _api + path;
  }
  return _api;
};
