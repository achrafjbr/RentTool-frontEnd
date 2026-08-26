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

export const diffFiveMinuts = (dateTimeString: string): string => {
  const targetDate = new Date(dateTimeString);
  const currentDate = new Date();

  if (isNaN(targetDate.getTime())) {
    return "Invalid date";
  }

  const diffInMs = currentDate.getTime() - targetDate.getTime();
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));

  if (diffInMinutes >= 0 && diffInMinutes <= 5) {
    return "À l'instant";
  }

  const isSameDay =
    targetDate.getFullYear() === currentDate.getFullYear() &&
    targetDate.getMonth() === currentDate.getMonth();
  // && targetDate.getDate() === currentDate.getDate();

  if (isSameDay) {
    return targetDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return wasSent(targetDate, currentDate);
};

export const wasSent = (targetDate: Date, currentDate: Date): string => {
  let passedMonths = (currentDate.getMonth() - targetDate.getMonth() + 12) % 12;
  let daysDiff = currentDate.getDate() - targetDate.getDate();

  if (daysDiff < 0) {
    passedMonths -= 1;
    const previousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0,
    );
    daysDiff += previousMonth.getDate();
  }

  if (passedMonths < 0) {
    passedMonths += 12;
  }

  const monthText = passedMonths === 1 ? "month" : "months";
  const dayText = daysDiff === 1 ? "day" : "days";

  return `${passedMonths} ${monthText}, ${daysDiff} ${dayText}`;
};
