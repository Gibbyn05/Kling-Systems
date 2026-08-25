export const formatNok = (value: number) => new Intl.NumberFormat("nb-NO", {
  style: "currency",
  currency: "NOK",
  maximumFractionDigits: 0,
}).format(value);

export const formatDate = (value: string) => new Intl.DateTimeFormat("nb-NO", {
  timeZone: "Europe/Oslo",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
}).format(new Date(value));

export const formatPercent = (value: number | null, digits = 1) => value === null ? "—" : `${(value * 100).toFixed(digits)} %`;
