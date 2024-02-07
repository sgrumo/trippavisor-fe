export const formatDateRange = (
  startDate: string,
  endDate: string,
  locale: string = "it-IT",
): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const start = new Date(startDate);
  const end = new Date(endDate);

  const startMonth = start.toLocaleDateString(locale, { month: "short" });
  const endMonth = end.toLocaleDateString(locale, { month: "short" });

  if (startMonth === endMonth) {
    return `${start.getDate()}-${end.getDate()} ${startMonth} ${start.getFullYear()}`;
  } else {
    return `${start.getDate()} ${startMonth} - ${end.getDate()} ${endMonth} ${end.getFullYear()}`;
  }
};
