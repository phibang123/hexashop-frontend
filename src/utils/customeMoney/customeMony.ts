export const MoneyVietName = (money: number) => {
  return money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,') + ' VND';
};
