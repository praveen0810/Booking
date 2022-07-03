export const getCookie = () => {
  const params = {
    access_token: localStorage.getItem("token") || "",
  };
  return params;
};
