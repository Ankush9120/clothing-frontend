export function formatPrice(amount) {
  if (amount == null || amount === "") return "";
  return Number(amount).toLocaleString("en-IN");
}

export function deformatPrice(formattedAmount) {
  if (!formattedAmount) return 0;
  return parseFloat(formattedAmount.replace(/,/g, ""));
}

export function calculateDiscount(originalPrice, discountedPrice) {
    if (originalPrice === 0) return 0; 
    const discount = ((originalPrice - discountedPrice) / originalPrice) * 100;
    return discount.toFixed(2);
  }