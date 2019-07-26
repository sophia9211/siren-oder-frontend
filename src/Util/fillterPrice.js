const fillterPrice = obj => {
  if (obj.price) {
    return obj.price;
  }
  if (obj.oz_price !== 0) {
    return obj.oz_price;
  } else if (obj.short_price !== 0) {
    return obj.short_price;
  } else if (obj.tall_price !== 0) {
    return obj.tall_price;
  } else if (obj.venti_price !== 0) {
    return obj.venti_price;
  }
};

export default fillterPrice;
