export function getCurrentAndPreviousThreeMonths() {
  const currentDate = new Date();
  const months = [];

  const formatDate = (date: any) => {
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };

  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const currentMonthTitle = new Intl.DateTimeFormat("en-US", {
    month: "short",
  }).format(currentDate);
  const currentMonthStartDate = formatDate(
    new Date(currentYear, currentMonth - 1, 1),
  );
  const currentMonthEndDate = formatDate(
    new Date(currentYear, currentMonth, 0),
  );
  months.push({
    monthTitle: currentMonthTitle,
    startDate: currentMonthStartDate,
    endDate: currentMonthEndDate,
  });

  for (let i = 0; i < 3; i++) {
    const previousMonth = new Date(currentDate);
    previousMonth.setMonth(currentDate.getMonth() - i - 1);

    const month = previousMonth.getMonth() + 1;
    const year = previousMonth.getFullYear();

    const monthTitle = new Intl.DateTimeFormat("en-US", {
      month: "short",
    }).format(previousMonth);
    const startDate = formatDate(new Date(year, month - 1, 1));
    const endDate = formatDate(new Date(year, month, 0));

    months.push({
      monthTitle: monthTitle,
      startDate: startDate,
      endDate: endDate,
    });
  }

  return months;
}

const currentAndPreviousThreeMonths = getCurrentAndPreviousThreeMonths();
