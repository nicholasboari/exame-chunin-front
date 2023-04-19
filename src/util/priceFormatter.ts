export function priceFormatter(price: number | undefined) {
  const valorFormatado = price?.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return valorFormatado;
}
