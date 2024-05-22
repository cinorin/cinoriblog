export const formatDate = (dateString: string): string => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dateParts = dateString.split("-");
  if (dateParts.length !== 3) {
    throw new Error("Invalid date format. Expected format: YYYY-MM-DD");
  }

  const [year, month, day] = dateParts;
  const monthIndex = parseInt(month, 10) - 1;

  if (monthIndex < 0 || monthIndex > 11) {
    throw new Error("Invalid month in date string");
  }

  const formattedDate = `${year} ${months[monthIndex]} ${parseInt(day, 10)}`;
  return formattedDate;
};
