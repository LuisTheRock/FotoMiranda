export const FormatDate = (date: string) => {
  const formatDate = new Date(date)
    .toISOString()
    .substring(0, 10)
    .split('-')
    .reverse()
    .join('/');
  const formatHour = new Date(date).toISOString().substring(11, 19);

  return formatDate + ' & ' + formatHour + 'h';
};
