import Moment from "moment";

export const getKoreaDateYMD = jsonData => {
  const result = Moment(jsonData, "YYYY-MM-DD");
  return result.format("YYYY년 MM월 DD일");
};

export const getKoreaDateYMDTime = jsonData => {
  const getTime = Moment(jsonData.split(" ")[1], "hh:mm:ss");
  const result = Moment(jsonData, "YYYY-MM-DD");
  console.log(result.format("YYYY년 MM월 DD일") + getTime.format(" HH시 MM분"));
  return result.format("YYYY년 MM월 DD일") + getTime.format("HH시 MM분");
};
