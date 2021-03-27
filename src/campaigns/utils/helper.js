import moment from "moment";

export const getCurrentLanguage = () => {
  let localLang = window.localStorage.getItem("i18nextLng");
  return localLang ? localLang.split("-")[0] : "en";
};

export const isMobile = /iPhone|iPad|iPod|Android/i.test(
  window.navigator.userAgent
);

export const getTime = (time) => {
  if (!time) return;
  let createdAt;
  createdAt = moment(new Date(time)).fromNow();
  return createdAt;
};
