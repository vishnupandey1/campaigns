import moment from "moment"

export const getCurrentLanguage = () => {
  let localLang = window.localStorage.getItem("i18nextLng");
  return localLang ? localLang.split("-")[0] : "en";
};

export const isMobile = /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent);

export const getTime = (time) => {
  if (!time) return;
  let createdAt;
  const today = new Date();
  if (new Date(time).toDateString() > today.toDateString()) {
    createdAt = moment(new Date(time)).fromNow();
  } else {
    createdAt = moment(new Date(time)).format("MMM DD, h:mm A").toLowerCase();
  }
  return createdAt;
};