export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
};

export const parsePrice = (priceStr: string) => {
  return parseInt(priceStr.replace(/[^0-9]/g, "")) || 0;
};
