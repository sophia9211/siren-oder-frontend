export const REALTIMEPRICE = {
  location: "선릉점",
  timeToValue: {
    "7to9": 0,
    "9to11": 0,
    "11to13": 0,
    "13to15": 0,
    "15to17": 0,
    "17to19": 0,
    "19to21": 0,
    "21to23": 0
  }
};
//mock data
for (let key in REALTIMEPRICE["timeToValue"]) {
  REALTIMEPRICE["timeToValue"][key] = Math.floor(Math.random() * 1000000) + 1;
}

export const ORDERAMOUNT = {
  location: "선릉점",
  order_amount: {
    "7to9": 0,
    "9to11": 0,
    "11to13": 0,
    "13to15": 0,
    "15to17": 0,
    "17to19": 0,
    "19to21": 0,
    "21to23": 0
  }
};

for (let key in ORDERAMOUNT["order_amount"]) {
  ORDERAMOUNT["order_amount"][key] = Math.floor(Math.random() * 100) + 1;
}
console.log(ORDERAMOUNT);

let dayPrice = Math.floor(Math.random() * 10000000) + 1;
export const DAY_SALES_PRICE = {
  day_price_percent: Math.floor((dayPrice / 10000000) * 100),
  day_price: dayPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
};

let MonthPrice = Math.floor(Math.random() * 300000000) + 1;
export const MONTH_SALES_PRICE = {
  month_price_percent: Math.floor((MonthPrice / 300000000) * 100),
  month_price: MonthPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
};

export const POPULAR_ITEM = {
  name: ["아메리카노", "카페라떼", "홍차", "마끼아또", "콜드블루"],
  amount: [
    Math.floor(Math.random() * 20) + 1,
    Math.floor(Math.random() * 20) + 1,
    Math.floor(Math.random() * 20) + 1,
    Math.floor(Math.random() * 20) + 1,
    Math.floor(Math.random() * 20) + 1
  ]
};

export const MONTH_PRICE = {
  month: ["1월", "2월", "3월", "4월", "5월", "6월", "7월"],
  price: [
    Math.floor(Math.random() * 300000000) + 1,
    Math.floor(Math.random() * 300000000) + 1,
    Math.floor(Math.random() * 300000000) + 1,
    Math.floor(Math.random() * 300000000) + 1,
    Math.floor(Math.random() * 300000000) + 1,
    Math.floor(Math.random() * 300000000) + 1,
    MonthPrice
  ]
};
