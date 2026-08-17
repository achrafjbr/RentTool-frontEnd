export function numberRentalDays(startDate: Date, endDate: Date) {
  const millisecondsPerDay = 1000 * 60 * 60 * 24;

  const rentDays = Math.ceil(
    (endDate.getTime() - startDate.getTime()) / millisecondsPerDay,
  );

  return rentDays;
}

export const dateConvertor = (date: string) => {
  return date.split("T")[0];
};

export const diffFiveMinuts = (dateTime: string) => {
  const notificationMinute = dateTime.split(":")[1];
  const currentMinute = new Date().getMinutes();
  const diff = currentMinute - parseInt(notificationMinute);
  return diff > 5 ? dateConvertor(dateTime) : "À l'instant";
};
