export function numberRentalDays(startDate: Date, endDate: Date) {
  const millisecondsPerDay = 1000 * 60 * 60 * 24;

  const rentDays = Math.ceil(
    (endDate.getTime() - startDate.getTime()) / millisecondsPerDay,
  );

  return rentDays;
}
